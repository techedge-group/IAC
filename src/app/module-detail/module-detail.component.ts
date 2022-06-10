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

  myId:any;
  test:any;
  mySession:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sessions = data;
    const routeParams = this.route.snapshot.paramMap;
    const sessionIdFromRoute = Number(routeParams.get('id'));
    
    
    this.myId = sessionIdFromRoute.toString();
     console.log("MODULE ID",this.myId);
     console.log("TODAS LAS SESIONES",this.sessions);
     this.session = this.sessions.filter((e: any) => e.id === this.myId);
     console.log("SESION CON ID =", this.session);
     this.capsules = this.session[0].capsules;
     this.docs = this.session[0].docs;
     console.log("Capsules",this.capsules);
     console.log("Docs",this.docs);
  }
}
