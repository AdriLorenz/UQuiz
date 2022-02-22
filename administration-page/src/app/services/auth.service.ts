import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private checkAuthenticated(): boolean {
    let userData = localStorage.getItem('userInfo');

    if (userData && JSON.parse(userData)) {
      return true;
    }
    return false;
  }

  public isAuthenticated(): Boolean {
    return this.checkAuthenticated() ? true : false;
  }

  public isNotAuthenticated(): Boolean {
    return this.checkAuthenticated() ? false : true;
  }

  public getUserRole() {
    let userData = localStorage.getItem('userInfo') || '';
    let userJson = JSON.parse(userData);

    return userJson['user']['role_id_fk'];
  }

  public setUserInfo(user) {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public validate(email, password) {
    try {
      return this.http
        .post('http://localhost:5000/login', {
          email: email,
          password: password,
        })
        .toPromise();
    } catch (error) {
      return null;
    }
  }
}
