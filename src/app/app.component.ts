import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { firebaseConfig } from "src/firebase.config";
import { initializeApp } from "firebase/app";

@Component({
    selector:'app-root',
    templateUrl:'app.component.html',
    styleUrls : ['app.component.css']
})
export class AppComponent implements OnInit{
    ngOnInit(): void {
        initializeApp(firebaseConfig);
     }

}