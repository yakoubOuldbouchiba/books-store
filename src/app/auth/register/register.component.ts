import { Component } from '@angular/core';
import { Register } from 'src/app/types/AuthRegister';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: Register = {
    email: null,
    password: '',
    confrimPassword: ''
  }

  passwordMatched: boolean = true;

  register = (): any => {
    const auth = getAuth();
    if (this.form.confrimPassword != this.form.password) {
      this.passwordMatched = false;
      return;
    }
    if (this.form.email != null) {
      createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then((userCredential) => {
          console.log(userCredential);
          //const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }

}
