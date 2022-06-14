import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  inputValue:any;
  userInput:any = [];
  errorEvent:boolean = false;
  error:string = 'Por favor, introduce un usuario y contraseña correcto';
  
  
  constructor(public router: Router) { }


  ngOnInit(): void {
  }

  login() {
    this.inputValue = document.getElementsByTagName("input")[0].value;
    this.userInput = this.inputValue.toString();
    if(this.userInput.includes('@iac.es') && this.userInput != '') {
      this.router.navigateByUrl('/sessions');
    } else {
      this.errorEvent = true; 
    }
  };
}
