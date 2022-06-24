import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  todo?: Todo
  isAdded: boolean = false
  message: string = 'Belum ada Todo di tambahkan';
  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    isDone: new FormControl(false)
  })

  constructor(
    private readonly todoService: TodoService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        console.log("params: ", params);
        return params.id ? +params.id : null
      })
    ).subscribe(id => {
      this.todo = this.todoService.getTodoById(id);
      this.setFormValue()
    })
  }

  setFormValue(): void {
    if (this.todo) {
      this.todoForm.setValue(this.todo)
    }
  }

  onSubmit(): void {
    const todo: Todo = this.todoForm.value
    this.todoService.saveTodo(todo);
    this.isAlert()
    this.todoForm.reset();
  }

  ngOnChanges(): void {}

  isAlert(): void {
    this.isAdded = true;
    this.message = 'Todo berhasil di tambahkan';
  }

}
