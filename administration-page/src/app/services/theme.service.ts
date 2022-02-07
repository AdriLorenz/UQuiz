import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '../models/theme';

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
export class ThemeService {
  endpoint: string = 'http://localhost:5000/themes';

  constructor(private httpClient: HttpClient) {}

  getThemesWithTopicWithQuestionsWithAnswers(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(
      this.endpoint + '/withTopicsWithQuestionsWithAnswers'
    );
  }

  getThemes(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(this.endpoint);
  }

  createTheme(newThemeData: Theme): Observable<any> {
    return this.httpClient.post(this.endpoint, newThemeData);
  }

  deleteTheme(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  updateTheme(updatedTheme: Theme): Observable<any> {
    return this.httpClient.put(
      this.endpoint + '/' + updatedTheme.theme_id,
      updatedTheme
    );
  }
}
