import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Book[]=[];

  constructor() { }

  add = (book : Book):any=>{
    
    this.cart.push(book);
  }

  remove = (book : Book):any=>{
    
    this.cart = this.cart.filter(bookFiltered=> book !== bookFiltered);
  }


  get = ():Book[]=>{
    return this.cart;
  }
}
