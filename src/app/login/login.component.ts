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
  
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.inputValue = document.getElementsByTagName("input")[0].value;
    this.userInput = this.inputValue.toString();
    // console.log(this.userInput);

    if(this.userInput.includes('esgeo.com')) {
      // console.log("TRUE");
      this.router.navigateByUrl('/module-list');
    } else {
      // console.log("FALSE");
    }
  };
}
