import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTodosRoutingModule } from './new-todos-routing.module';
import { NewTodosComponent } from './new-todos.component';
import { NewTodoListComponent } from './new-todo-list/new-todo-list.component';
import { NewTodoFormComponent } from './new-todo-form/new-todo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NewTodoService } from './services/new-todo.services';


@NgModule({
  declarations: [NewTodosComponent, NewTodoListComponent, NewTodoFormComponent],
  imports: [
    CommonModule,
    NewTodosRoutingModule,
    HttpClientModule
  ],
  providers:[NewTodoService]
})
export class NewTodosModule { }
