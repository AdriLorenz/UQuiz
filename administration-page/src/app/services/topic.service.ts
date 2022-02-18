import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { TopicWithQuestions } from '../models/topicWithQuestions';

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
export class TopicService {
  endpoint: string = 'http://localhost:5000/topics';

  constructor(private httpClient: HttpClient) {}

  getTopicsOfTheme(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.endpoint);
  }

  getOne(topic_id: number): Observable<Topic> {
    return this.httpClient.get<Topic>(this.endpoint + '/' + topic_id);
  }

  getOneTopicWithQuestions(topic_name: string): Observable<any> {
    return this.httpClient.get<TopicWithQuestions>(
      this.endpoint + '/' + topic_name + '/WithQuestions'
    );
  }
  createTopic(topicData: Topic, themeId: number): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append('topic_name', topicData.topic_name);
    bodyEncoded.append('theme_id_fk', themeId.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.post(
      this.endpoint,
      body,
      httpOptionsUsingUrlEncoded
    );
  }

  deleteTopic(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  updateTopic(updatedTopic: Topic): Observable<any> {
    return this.httpClient.put(
      this.endpoint + '/' + updatedTopic.topic_id,
      updatedTopic
    );
  }
}
