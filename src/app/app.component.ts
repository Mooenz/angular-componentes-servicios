import { Component } from '@angular/core';
import { Product } from './models/Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent: string = '';
  imgExample: string = 'https://www.w3schools.com/howto/img_avatar.png';

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'Hermosas gafas',
      price: 34,
      image: './assets/images/glasses.jpg'
    },
    {
      id: '6',
      name: 'Mi casa',
      price: 23,
      image: './assets/images/house.jpg'
    },
  ];

  onLoaded(img: string) {
    console.log(`Desde el componente padre url: ${img}`);
  }
}
