import { Component, OnInit } from '@angular/core';
import data from 'data.json';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
 sessions:any;
 id:any;
//  data:any;

  constructor() { }

  ngOnInit(): void {
    this.sessions = data;
    console.log(this.sessions);
  }


}
