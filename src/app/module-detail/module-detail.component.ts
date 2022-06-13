import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import data from 'data.json';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {

  sessions:any;
  session:any;
  capsules:any;
  docs:any;
  docsCount:number = 0;

  myId:any;
  test:any;
  mySession:any;


  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    
    this.sessions = data;
    const routeParams = this.route.snapshot.paramMap;
    const sessionIdFromRoute = Number(routeParams.get('id'));
    
    
    this.myId = sessionIdFromRoute.toString();
     this.session = this.sessions.filter((e: any) => e.id === this.myId);
     this.capsules = this.session[0].capsules;
     this.docs = this.session[0].docs;
     this.docsCount = this.session[0].docs.length;
  }

}
