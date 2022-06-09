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
//  session:any;
 id:any;
 mySession:any;
//  data = 10;
//  toSibblin:string[] = [];

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sessions = data;
  }

  chechID(session:any) {
    this.mySession = session;
    console.log("my session", this.mySession);
    // this.toSibblin.push(this.mySession);
    // console.log("TO SIBBLIN", this.toSibblin);
  }

}
