import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  @Input() todo?: Todo;
  // @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  // penerapan two way
  @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>()
  isAdded: boolean = false
  message: string = 'Belum ada Todo di tambahkan';

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    isDone: new FormControl(false)
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.todoForm.value);
    this.isAlert();
    this.todoChange.emit(this.todoForm.value)
    this.todoForm.reset();
  }

  ngOnChanges(): void {
    if(this.todo) {
      this.todoForm.setValue(this.todo)
    }
  }

  isAlert(): void {
    this.isAdded = true;
    this.message = 'Todo berhasil di tambahkan';
  }

}
