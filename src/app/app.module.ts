import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing-module";
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from "./auth/auth.module";

 @NgModule(
    {
        declarations:[AppComponent, CartComponent, RegisterComponent, LoginComponent],
        imports:[BrowserModule , 
            FormsModule , 
            BooksModule,
            AuthModule,
            AppRoutingModule
        ],
        bootstrap:[AppComponent]
    }
 )
 export class AppModule  {}
