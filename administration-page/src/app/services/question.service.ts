import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { Theme } from '../models/theme';
import { Topic } from '../models/topic';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};

@Injectable({
  providedIn: 'any',
})
export class QuestionService {
  endpoint: string = 'http://localhost:5000/questions';

  constructor(private httpClient: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.endpoint + '/data');
  }

  getQuestionById(id: number): Observable<Question> {
    return this.httpClient.get<Question>(this.endpoint + '/' + id);
  }

  // createQuestion(): any {

  //   return this.httpClient.post(
  //     this.endpoint + '/data',
  //     question.$question_id,
  //     httpOptionsUsingUrlEncoded
  //   );
  // }
}
