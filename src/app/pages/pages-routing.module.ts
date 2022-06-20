import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: 'index',
    component: TodosComponent
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PagesRoutingModule{}
