import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../Config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';
import { getUserProfileFailure, getUserProfileSuccess } from './user.action';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private api_url = BASE_API_URL + '/api';
  headers: any;

  constructor(private http: HttpClient, private store: Store) {
    this.headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt')}`
    );
  }

  getUserProfile() {
    return this.http
      .get(`${this.api_url}/users/profile`, { headers: this.headers })
      .pipe(
        map((user: any) => {
          console.log('User Profile geted ', user);
          return getUserProfileSuccess({ userProfile: user });
        }),
        catchError((error) => {
          return of(
            getUserProfileFailure(
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
