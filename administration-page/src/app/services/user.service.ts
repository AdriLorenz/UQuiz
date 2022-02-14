import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

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
export class UserService {
  endpoint: string = 'http://localhost:5000/users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint);
  }

  createUser(newUserData: User): Observable<User> {
    return this.httpClient.post<User>(this.endpoint + '/register', newUserData);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  updateUser(updatedUser: User): Observable<any> {
    return this.httpClient.put(
      this.endpoint + '/' + updatedUser.user_id,
      updatedUser
    );
  }
}
