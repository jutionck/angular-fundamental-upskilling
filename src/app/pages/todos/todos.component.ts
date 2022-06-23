import { Component, DoCheck, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  ngOnInit(): void {
  }
}
