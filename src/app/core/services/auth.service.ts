import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  emailValid = '';
  pwdValid = '';

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router,
    private tokenService: TokenService
  ) {}

  login(email: string, pwd: string) {
    this.http
      .post(
        'https://dummyjson.com/auth/login',
        {
          username: email,
          password: pwd,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        tap((response: any) => {
          this.tokenService.saveToken(response.token);
        })
      )
      .subscribe(
        (response: any) => {
          this.location.replaceState('/home');
          window.location.reload();
        },
        (error) => {
          alert('Usuario o contraseña incorrecta');
        }
      );
  }
}
