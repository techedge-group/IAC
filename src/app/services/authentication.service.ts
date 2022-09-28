import { Injectable } from '@angular/core';
import { Auth, authState, sendPasswordResetEmail, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(username: string, password: string) {
   return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  logout() {
    return from(this.auth.signOut());
  }

  resetPassword(username:string) {
    return sendPasswordResetEmail(this.auth, username)
  }

}
