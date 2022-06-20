import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { PagesRoutingModule } from './pages-routing.module';

const components = [TodosComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [...components]
})
export class PagesModule { }
