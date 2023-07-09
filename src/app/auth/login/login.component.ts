import { Component } from '@angular/core';
import { Login } from 'src/app/types/AuthLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form : Login ={
    email :'',
    password : ''
  }

  login = ()=>{
    console.log(this.form);
  }

}
