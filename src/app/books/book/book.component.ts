import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() book : Book = {} as Book;
  isInCart : boolean = false;


  constructor(private cartService : CartService , private authService : AuthService){

  }
  ngOnInit(): void {
    this.isInCart = this.cartService.get().filter(book=>this.book.id === book.id).length > 0;
  }
  
  addToCard =()=>{
    this.isInCart=true;
    this.cartService.add(this.book);
    //this.emitBook.emit(this.book);
  }

  removeToCard =()=>{
    this.isInCart=false;
    this.cartService.remove(this.book);
    //this.emitBook.emit(this.book);
  }

  isAuthenficated = ()=>{
    return this.authService.isAuthenficated;
  }
}
