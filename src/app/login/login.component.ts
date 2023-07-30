import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Auth } from '../shared/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = false;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    let { login, password } = this.loginForm.value;

    this.service
      .login(login, password)
      .pipe(take(1))
      .subscribe({
        next: (value) => {
          localStorage.setItem('auth', String(value.auth));
          this.router.navigate(['/reserve']);
        },
        error: (err: HttpErrorResponse) => {
          if (err.status == 401) {
            this.toast.error('Erro!', 'Usuário ou senha inválidos!');
          } else {
            this.toast.error('Erro!', 'Ocorreu um erro, teste novamente!');
          }
        },
      });
  }

  // login(): void {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   const { login, password } = this.loginForm.value;

  //   this.service.login(login, password).pipe(take(1)).subscribe({
  //     next: (auth: Auth) => {
  //       localStorage.setItem('auth', String(auth.isAuthenticated));
  //       if (auth.isAuthenticated) {
  //         this.router.navigate(['/reserve']);
  //       } else {
  //         this.toast.error('Erro!', 'Usuário ou senha inválidos!');
  //         this.router.navigate(['/login']);

  //       }
  //     },
  //     error: (err: HttpErrorResponse) => {
  //       if (err.status === 401) {
  //         this.toast.error('Erro!', 'Usuário ou senha inválidos!');
  //         this.router.navigate(['/login']);
  //       } else {
  //         this.toast.error('Erro!', 'Erro inesperado durante o login.');
  //         console.error('Erro na solicitação de login:', err);
  //       }
  //     }
  //   });
  // }
 
}
