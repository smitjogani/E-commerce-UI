import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../Config/api';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';
import {loginFailure, loginSuccess, registerFailure, registerSuccess } from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api_url = BASE_API_URL + '/auth';

  constructor(private http: HttpClient, private store: Store) {}

  login(loginData: any) {
    return this.http
      .post(`${this.api_url}/login`, loginData)
      .pipe(
        map((user: any) => {
          console.log(user);
          if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
          }
          return loginSuccess({ user });
        }),
        catchError((error) => {
          return of(
            loginFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => {
        this.store.dispatch(action);
      });
  }

  register(user: any) {
    return this.http
      .post(`${this.api_url}/signup`, user)
      .pipe(
        map((user: any) => {
          console.log(user);
          if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
          }
          return registerSuccess({ user });
        }),
        catchError((error) => {
          return of(
            registerFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => {
        this.store.dispatch(action);
      });
  }
}
