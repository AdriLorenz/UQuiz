import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role';

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
export class RoleService {
  endpoint: string = 'http://localhost:5000/roles';

  constructor(private httpClient: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.endpoint);
  }

  createRole(newThemeData: Role): Observable<any> {
    return this.httpClient.post(this.endpoint, newThemeData);
  }

  deleteRole(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  updateRole(updatedRole: Role): Observable<any> {
    return this.httpClient.put(
      this.endpoint + '/' + updatedRole.role_id,
      updatedRole
    );
  }
}
