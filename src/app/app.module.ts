import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    ModuleDetailComponent,
    PageNotFoundComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'module-list', component: ModuleListComponent},
      {path: 'module-detail', component: ModuleDetailComponent},
      {path: '', redirectTo: '/module-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
