import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable()
export class BooksService {


  getBooks = () : Book[] =>{
    return [
      {
        id:1,
        name: 'clean code',
        author: 'robert c martin',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo",
        amount : 700
      },
      {
        id:2,
        name: 'Clean Code v2',
        author: 'Robert C Martin',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo",
        amount : 1700
      },
      {
        id:3,
        name: 'clean code',
        author: 'robert c martin',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo",
        amount : 700
      },
      {
        id:4,
        name: 'Clean Code v2',
        author: 'Robert C Martin',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo",
        amount : 1700
      }
    ];
  }  
  
}

