import { getAuth,  signOut,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Injectable } from "@angular/core";
import { Login } from "../types/AuthLogin";
import { Register } from "../types/AuthRegister";
import { Route, Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  isAuthenficated: boolean = false;
  isLoading: boolean = false;
  login(form: Login) {
    this.isLoading = true;
    const auth = getAuth();
    if (form.email == null) {
      return;
    }
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        alert(`Log in secuss`);
        this.isAuthenficated = true;
        const user = userCredential.user;
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        this.isAuthenficated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Erreur ${errorMessage}`);
      }).finally(() => {
        this.isLoading = false;
      });

  }
  register(form: Register) {
    this.isLoading = true;
    const auth = getAuth();
    if (form.confrimPassword != form.password) {
      return;
    }
    if (form.email == null) {
      return;
    }
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        console.log(userCredential);
        //const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuthenficated=false;
    }).catch((error) => {
      // An error happened.
    });
  }

}