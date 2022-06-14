import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from 'data.json';

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


  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sessions = data;
    this.count = this.sessions.length;
   
  }

}
