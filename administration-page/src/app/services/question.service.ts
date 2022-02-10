import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionWithAnswers } from '../models/questionWithAnswers';
import { Question } from '../models/question';

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

  getQuestionsWithAnswers(): Observable<QuestionWithAnswers[]> {
    return this.httpClient.get<QuestionWithAnswers[]>(
      this.endpoint + '/WithAnswers'
    );
  }

  getQuestionWithAnswersById(id: number): Observable<QuestionWithAnswers> {
    return this.httpClient.get<QuestionWithAnswers>(
      this.endpoint + '/WithAnswers/' + id
    );
  }

  createQuestionWithAnswers(
    newQuestion: QuestionWithAnswers
  ): Observable<QuestionWithAnswers> {
    return this.httpClient.post<QuestionWithAnswers>(
      this.endpoint + '/',
      newQuestion
    );
  }

  deleteQuestionWithAnswers(id: number) {
    console.log(id);
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  editQuestionWithAnswers(updatedQuestionWithAnswers: QuestionWithAnswers) {
    return this.httpClient.put(
      this.endpoint + '/edit/' + updatedQuestionWithAnswers.question_id,
      updatedQuestionWithAnswers
    );
  }
}
