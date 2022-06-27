import { Component, OnInit } from '@angular/core';
import { NewTodoService } from '../services/new-todo.services';
import { Observer } from 'rxjs';
import { NewTodo } from '../models/new-todo.model';

@Component({
  selector: 'app-new-todo-list',
  templateUrl: './new-todo-list.component.html',
  styleUrls: ['./new-todo-list.component.scss']
})
export class NewTodoListComponent implements OnInit {
  constructor(
    private readonly todoService: NewTodoService
  ) {}

  todos: NewTodo[] = [];
  subscribe: Observer<any>;

  ngOnInit(): void {
    this.getAllTodo()
  }

  getAllTodo(): void {
    this.subscribe = {
      next: (todos) => {
        this.todos = todos.data
      },
      error: console.error,
      complete(): void {},
    }
    this.todoService.list()
      .subscribe(this.subscribe)
  }
  onCheckTodo(todo: NewTodo): void {}
  onSelectTodo(todo: NewTodo): void {}
  onDeleteTodo(todo: NewTodo): void {}

}
