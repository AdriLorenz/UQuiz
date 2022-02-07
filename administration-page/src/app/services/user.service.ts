import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

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
    return this.httpClient.post<User>(this.endpoint, newUserData);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  updateUser(updatedUser: User): Observable<any> {
    return this.httpClient.put(
      this.endpoint + '/' + updatedUser.id,
      updatedUser
    );
  }
}
