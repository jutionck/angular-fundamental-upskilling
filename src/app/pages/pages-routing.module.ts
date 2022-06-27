import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: 'new-todos',
    loadChildren: () => import('./new-todos/new-todos.module').then(m => m.NewTodosModule)
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PagesRoutingModule{}
