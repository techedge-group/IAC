import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['sessions']);

const routes: Routes = [
  {path: 'sessions', component: ModuleListComponent, ...canActivate(redirectToLogin)},
  {path: 'session/:id', component: ModuleDetailComponent},
  {path: 'login', component: LoginComponent, ...canActivate(redirectToHome)},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, ...canActivate(redirectToLogin)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
