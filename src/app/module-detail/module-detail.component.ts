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

  myId:any;
  s:number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.sessions = data;
    const routeParams = this.route.snapshot.paramMap;
    const sessionIdFromRoute = Number(routeParams.get('id'));
    console.log(this.sessions);
    
    
    this.myId = sessionIdFromRoute;
    console.log(this.myId);
    this.s = this.sessions.find((e: number) => e === 2);
    // this.product = products.find(product => product.id === productIdFromRoute);
    
    // this.sessions.forEach((element:any) => {
    //   this.session = element[1];
      
    // });
    // this.session = this.sessions.find((e: { id: any; }) => e.id === this.myId);
    console.log("mi sesion", this.session)

  }

}
