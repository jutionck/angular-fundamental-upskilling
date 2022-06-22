import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  todo: Todo = {
    id: 1,
    name: 'Makan',
    isDone: false
  }

  constructor() { }

  ngOnInit(): void {
    this.todos = [
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
      {
        id: 1,
        name: 'Mandi',
        isDone: false
      }
    ]
  }

  onSaveTodo(todo: Todo): void {
    // console.log('onSaveTodo: ', todo);
    todo.id = this.todos.length + 1;
    this.todos.push(todo)
  }
}
