import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() img: string = '';
  imageDefault = './assets/images/default.png';
  @Output() loaded = new EventEmitter<string>();

  ingError() {
    this.img = this.imageDefault;
  }

  ingLoad() {
    console.log('Desde el componente hijo');
    this.loaded.emit(this.img);
  }
}
