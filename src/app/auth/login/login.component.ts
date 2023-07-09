import { Component } from '@angular/core';
import { Login } from 'src/app/types/AuthLogin';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService : AuthService){

  }
  form: Login = {
    email: '',
    password: ''
  }


  login = () => {
    this.authService.login(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }

}
