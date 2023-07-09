import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { firebaseConfig } from "src/firebase.config";
import { initializeApp } from "firebase/app";
import { AuthService } from "./auth/auth.service";

@Component({
    selector:'app-root',
    templateUrl:'app.component.html',
    styleUrls : ['app.component.css']
})
export class AppComponent implements OnInit{
    constructor(private authService : AuthService){}
    ngOnInit(): void {
        initializeApp(firebaseConfig);
    }

    isAuthenficated(){
        return this.authService.isAuthenficated
    }

    logout(){ 
        this.authService.logout();
    }

}