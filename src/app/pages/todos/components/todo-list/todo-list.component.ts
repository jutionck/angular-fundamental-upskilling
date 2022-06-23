import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] = [];
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>()
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>()
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  ngOnInit(): void {
  }

  onCheckTodo(todo: Todo): void {
    todo.isDone = !todo.isDone;
    this.toggleTodo.emit();
  }
  onSelectTodo(todo: Todo): void {
    this.editTodo.emit(todo)
  }

}
