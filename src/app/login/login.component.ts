import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { MatExpansionModule } from '@angular/material/expansion';
import { catchError } from 'rxjs';

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
  panelOpenState: boolean = false;
  userInputMessage:string = '';
  userPwdMessage:string = '';
  userDefaultErrorMessage:string = '';

  loginForm:FormGroup = new FormGroup({});
  submitted: boolean = false;


  recoveryForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,]),
  });

  constructor(
    public router: Router,
    private authService: AuthenticationService,
    private toast: HotToastService,
    public expansion: MatExpansionModule,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.loginForm.controls;
  } 


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
              this.userInputMessage = `No se ha encontrado usuario con la cuenta ${email}`;
              this.loginForm.controls['email'].setErrors({'incorrect': true});
              // this.toast.error(`No se ha encontrado usuario con la cuenta ${email}`);
              break;
            case 'auth/wrong-password':
              this.userPwdMessage ='Contraseña incorrecta';
              this.loginForm.controls['password'].setErrors({'incorrect': true});
              // this.toast.error(`Contraseña incorrecta`); 
              break;
            default:
              // this.toast.error('Se ha producido un error');
              this.userDefaultErrorMessage = 'Se ha producido un error';
          }
        })

      )
      .subscribe((data) => {
        if (data !== undefined) {
          this.toast.success('Sesión iniciada correctamente');
          this.router.navigate(['/sessions']);
        }
      });
  }

  clearMessage() {
    this.userInputMessage = '';
  }
  togglePwdRecovery() {
    this.panelOpenState = !this.panelOpenState;
  }

  recovery() {
    if (!this.recoveryForm.valid) {
      return;
    }
    const { email } = this.recoveryForm.value;
    this.authService
      .resetPassword(email)
      .then(() => {
        this.toast.success('Se ha enviado a su correo electrónico instrucciones para reiniciar su contraseña');
        this.panelOpenState = !this.panelOpenState;
      })
      .catch((error) =>
        this.toast.error(`No se ha encontrado usuario con la cuenta ${email}`)
      );
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




  