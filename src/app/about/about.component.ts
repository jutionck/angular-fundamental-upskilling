import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Passing Data
  name:string = '';

  onKeyPress(event: Event) : void {
    const result: string = (<HTMLInputElement>event.target).value
    this.name = result;
    console.log(result);
  }

}
