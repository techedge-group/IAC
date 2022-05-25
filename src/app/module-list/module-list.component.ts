import { Component, OnInit } from '@angular/core';
import myData from 'src/assets/mockdata/dummy.json';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  modules:any;

  constructor() { }

  ngOnInit(): void {
    // this.modules = myData;
    // console.log(this.modules);
  }

}
