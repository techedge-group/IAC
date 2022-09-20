import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './services/authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'iac-app';
  theme = 'default';
  themes = environment.themes;

  constructor(public authService: AuthenticationService, private router: Router) {
    
  }

  ngOnInit(): void {
    
      this.authService.currentUser$.subscribe((user:any) => {
        if(user) {
          let email = user.email;
          email = email.substring(email.indexOf('@')+1);
          email = email.substring(0, email.indexOf('.'));
          if(this.themes.includes(email)) {
            this.theme = email;
          } else {
            this.theme = 'default';
          }
        }
      });    
  }
}
