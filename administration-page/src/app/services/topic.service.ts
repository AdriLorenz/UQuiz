import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';
import { TopicWithQuestions } from '../models/topicWithQuestions';

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
    console.log(this.endpoint + '/' + topic_id);
    return this.httpClient.get<Topic>(this.endpoint + '/' + topic_id);
  }

  getOneTopicWithQuestions(topic_name: string): Observable<any> {
    return this.httpClient.get<TopicWithQuestions>(
      this.endpoint + '/' + topic_name + '/WithQuestions'
    );
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
