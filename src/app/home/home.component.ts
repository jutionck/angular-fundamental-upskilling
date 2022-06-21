import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /*
  * String Interpolation -> penggunaan sederhana sebuah data binding pada Angular
  * -> penerapanya di html dengan menggunakan double bracket : {{ data }}
  * -> yang diterima itu bisa berupa: property, array, function, expression
  * -> yang tidak bisa itu: object, agar bisa kita harus spesifik key-nya apa
  * */

  title: string = 'Enigma App';
  cars: string[] = ['Avanza', 'Xenia', 'Mobilio', 'Rush'];
  getTittle(): string{
    return this.title
  }
  customer = {
    'id': 123,
    'name': 'Bulan',
    'isMarried': false
  };

  /*
  * Property Binding -> cara angular untuk mengontrol / mengubah value dari suatu element (tag html)
  * -> contohnya: ketika kita ingin disabled button, readonly text input, dll
  * */

  isDisabled: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isDisabled = !this.isDisabled
    }, 5000)
  } // akan di panggil ketik class dirinya di panggil

  ngOnInit(): void { // merupakan salah satu lifecycle hooks si angular
  }

  /*
  * Event Binding -> cara angular untuk mengontrol suatu event dari suatu element
  * -> contohnya: click, change, hover, dll
  * */

  showMessage: string = '';
  getMessage: string = 'Pesan ini muncul karena tombol di klik';
  onClickButton(): void {
    alert(this.showMessage = this.getMessage)
    this.showMessage = this.getMessage
  }

}
