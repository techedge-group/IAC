import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from 'data.json';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
 sessions:any;

 id:any;
 mySession:any;
 count:number = 0;
 user$ = this.authService.currentUser$;
 username:string = '';


  constructor(private router: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.sessions = data;
    this.count = this.sessions.length;
    this.authService.currentUser$.subscribe((user:any) => {
      if(user) {
        this.username = user.email.substring(user.email.indexOf('@'), '.'+3);      
      }
    });  
   
  }

}
