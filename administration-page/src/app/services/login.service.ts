import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  endpoint: string = 'http://localhost:5000/login';

  constructor(private httpClient: HttpClient) {}

  loginUser(credentials: { email: string; password: string }): Observable<any> {
    return this.httpClient.post(this.endpoint, credentials);
  }
}
