import { Component, DoCheck, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, DoCheck {

  todos: Todo[] = []; // buat nangkep list
  todoValue?: Todo; // buat nangkep edit atau hapus

  get todo(): Todo {
    return this.todoValue as Todo
  }

  set todo(todo: Todo) {
    this.onSaveTodo(todo)
  }

  ngOnInit(): void {
    console.log('ngOnInit() is called');
    this.initTodo();
  }

  initTodo(): void {
    const sessionTodos: string = sessionStorage.getItem('todos') as string;
    if(!sessionTodos) {
      const todos: Todo[] = [
        {
          id: 1,
          name: 'Makan',
          isDone: true
        },
        {
          id: 2,
          name: 'Minum',
          isDone: true
        },
      ];
      sessionStorage.setItem('todos', JSON.stringify(todos))
      this.todos = todos;
    } else {
      this.todos = JSON.parse(sessionTodos);
    }
  }

  onToggleTodo(): void{
    sessionStorage.setItem('todos', JSON.stringify(this.todos))
  }

  onEditTodo(todo: Todo): void {
    this.todoValue = todo
  }

  onSaveTodo(todo: Todo): void {
    console.log('Todo: ', todo);
    if(this.todoValue) {
      this.todos = this.todos.map((item) => {
        if (item.id === todo.id) {
          item = { ...item, ...todo}
        }
        return item
      })
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      todo.id = this.todos.length + 1;
      this.todos.push(todo)
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  onDeleteTodo(todo: Todo): void {
    if(todo.isDone) {
      alert('Todo ini tidak boleh di hapus karena sudah selesai')
    } else {
      this.todos.splice(1,1);
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() is called');
  }
}
