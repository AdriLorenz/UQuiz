import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom';
import { ClassroomWithUsers } from '../models/classroomWithUsers';

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
export class ClassroomService {
  endpoint: string = 'http://localhost:5000/classrooms';

  constructor(private httpClient: HttpClient) {}

  getClassrooms(): Observable<Classroom[]> {
    return this.httpClient.get<Classroom[]>(this.endpoint);
  }

  getUsersByClassroomName(
    classroom_name: string
  ): Observable<ClassroomWithUsers> {
    return this.httpClient.get<ClassroomWithUsers>(
      this.endpoint + '/' + classroom_name + '/users'
    );
  }

  createClassroom(newClassroomData: Classroom): Observable<any> {
    return this.httpClient.post(this.endpoint, newClassroomData);
  }

  deleteClassroom(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  updateClassroom(updatedClassroom: Classroom): Observable<any> {
    return this.httpClient.put(
      this.endpoint + '/' + updatedClassroom.classroom_id,
      updatedClassroom
    );
  }
}
