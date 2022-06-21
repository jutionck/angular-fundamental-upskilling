import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() PData: string = '';
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string):void {
    this.childEvent.emit(value)
  }

}
