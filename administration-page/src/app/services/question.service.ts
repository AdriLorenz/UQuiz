import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionWithAnswers } from '../models/questionWithAnswers';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

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
    newQuestion: QuestionWithAnswers,
    topicId: number
  ): Observable<QuestionWithAnswers> {
    let bodyEncoded = new URLSearchParams();

    bodyEncoded.append('question_content', newQuestion.question_content);
    bodyEncoded.append(
      'question_difficulty',
      newQuestion.question_difficulty.toString()
    );
    bodyEncoded.append('topic_id_fk', topicId.toString());
    bodyEncoded.append('correctAnswer', newQuestion.answers[0].answer_content);
    bodyEncoded.append('wrongAnswer1', newQuestion.answers[1].answer_content);
    bodyEncoded.append('wrongAnswer2', newQuestion.answers[2].answer_content);

    const body = bodyEncoded.toString();

    return this.httpClient.post<QuestionWithAnswers>(
      this.endpoint + '/',
      body,
      httpOptionsUsingUrlEncoded
    );
  }

  deleteQuestionWithAnswers(id: number) {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  editQuestionWithAnswers(updatedQuestionWithAnswers: QuestionWithAnswers) {
    return this.httpClient.put(
      this.endpoint + '/edit/' + updatedQuestionWithAnswers.question_id,
      updatedQuestionWithAnswers
    );
  }
}
