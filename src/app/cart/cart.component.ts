import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {

  constructor(private cartService : CartService){}

   getCart = () : Book[]=>{
    return this.cartService.get();
   }

   removeBook = (book : Book) =>{
    this.cartService.remove(book);
   }

}
