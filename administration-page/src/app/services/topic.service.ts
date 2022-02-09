import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  endpoint: string = 'http://localhost:5000/topics';

  constructor(private httpClient: HttpClient) {}

  getTopicsOfTheme(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.endpoint);
  }

  createTopic(topicData: Topic): Observable<any> {
    return this.httpClient.post(this.endpoint, topicData);
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
