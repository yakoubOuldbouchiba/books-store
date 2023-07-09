import { Component } from '@angular/core';
import { Register } from 'src/app/types/AuthRegister';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService : AuthService){

  }
  form: Register = {
    email: null,
    password: '',
    confrimPassword: ''
  }

  passwordMatched: boolean = true;
  //isLoading: boolean = false;

  register = (): any => {
   
    this.authService.register(this.form);
    
  }

  isLoading (){
    return false;
  }
}


