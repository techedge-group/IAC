import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { PERSISTENCE } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { YoutubePipe } from './youtube.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    ModuleDetailComponent,
    PageNotFoundComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    YoutubePipe,
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    HotToastModule.forRoot(),

    provideAuth(() => getAuth()),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: PERSISTENCE, useValue: 'local' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
