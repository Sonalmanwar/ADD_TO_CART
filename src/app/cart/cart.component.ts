import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image : string
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  books: Book[] = [
    { id: 1, title: 'Harry Potter and the Philosophers Stone', author: 'J K Rowling', price: 450, image:"https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, title: 'Life Divine', author: 'Sri Aurbindo Ghosh', price: 350,image:"https://m.media-amazon.com/images/I/61Ef7qK-CBL._AC_UF1000,1000_QL80_.jpg" },
    { id: 3, title: 'The Palace of Illusions', author: 'Chitra Banerjee Divakaruni', price: 300, image : "https://m.media-amazon.com/images/I/81W5rDzpJwL._AC_UF1000,1000_QL80_.jpg" },
    { id: 4, title: 'The God of Small Things', author:'Arundhati Roy', price:400 , image:"https://m.media-amazon.com/images/I/91saO95VziL._AC_UF1000,1000_QL80_.jpg"}
  ];

  cart: Book[] = [];

  addToCart(book: Book): void {
    this.cart.push(book);
  }

}
