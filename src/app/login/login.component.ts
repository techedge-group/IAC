import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, map, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  inputValue: any;
  userInput: any = [];
  errorEvent: boolean = false;
  error: string = 'Por favor, introduce un usuario y contraseña correcto';
  inputPwd: any;
  userPwd: any;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    public router: Router,
    private authService: AuthenticationService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  summit() {
    if (!this.loginForm.valid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    this.authService
      .login(email, password)
      .pipe(
        catchError(async (error) => {
          switch (error.code) {
            case 'auth/user-not-found':
              this.toast.error(`No User with the email ${email} found`);
              break;
            case 'auth/wrong-password':
              this.toast.error(`Wrong Password`);
              break;
            default:
              this.toast.error('There was an error');
          }
        })
      )
      .subscribe((data) => {
        if (data !== undefined) {
          this.toast.success('Iniciada sesión correctamente');
          this.router.navigate(['/sessions']);
        }
      });
  }

  // VERSION ANTIGUA LOGIN FAKE

  // login() {
  //   this.inputValue = document.getElementsByTagName("input")[0].value;
  //   this.inputPwd = document.getElementsByTagName("input")[1].value;
  //   this.userInput = this.inputValue.toString();
  //   this.userPwd = this.inputPwd.toString();
  //   if(this.userInput.includes('@iac.es') && this.userInput != '' && this.userPwd.includes('inicio01') || this.userInput == 'usuario@fundae.es' && this.userInput != '' && this.userPwd.includes('inicio01') || this.userInput == 'iker.mtzdearamayona@mercedes-benz.com' && this.userInput != '' && this.userPwd.includes('inicio01'))  {
  //     this.router.navigateByUrl('/sessions');
  //   } else {

  //     this.errorEvent = true;
  //   }
  // };
}
