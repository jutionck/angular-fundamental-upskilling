import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(
    private readonly todoService: TodoService
  ) {}

  todos: Todo[] = [];

  ngOnInit(): void {
    this.getAllTodo()
  }

  getAllTodo(): void {
    this.todos = this.todoService.getAll();
  }
  onCheckTodo(todo: Todo): void {
    this.todoService.checkedTodo(todo)
  }
  onSelectTodo(todo: Todo): void {
    // console.log(this.todoService.getTodoById(todo.id));
  }
  onDeleteTodo(todo: Todo): void {
    console.log('delete todo: ', todo);
    this.todoService.deleteTodo(todo.id)
  }

}
