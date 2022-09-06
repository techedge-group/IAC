import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public router: Router, public authService: AuthenticationService){
  }

  ngOnInit(): void {
    
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login'])
    })
  }

}
