import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '../models/theme';
import { ThemeWithTopics } from '../models/themeWithTopics';
import { Topic } from '../models/topic';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  getThemesWithTopicWithQuestionsWithAnswers(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(
      this.endpoint + '/withTopicsWithQuestionsWithAnswers'
    );
  }

  getTopicsByThemeName(theme_name: string): Observable<ThemeWithTopics> {
    return this.httpClient.get<ThemeWithTopics>(
      this.endpoint + '/' + theme_name + '/topics'
    );
  }

  getThemes(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(this.endpoint);
  }

  createTheme(uploadForm: FormGroup) {
    let bodyEncoded = new URLSearchParams();
    var formData: any = new FormData();
    formData.append('theme_name', uploadForm.get('theme_name')?.value);
    formData.append('themeImage', uploadForm.get('theme_img_path')?.value);

    const body = bodyEncoded.toString();
    const test = formData.toString();

    console.log(test);

    this.httpClient.post(this.endpoint, formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  deleteTheme(id: number): Observable<any> {
    return this.httpClient.delete(this.endpoint + '/' + id);
  }

  updateTheme(updatedTheme: any): Observable<any> {
    console.log(updatedTheme);
    return this.httpClient.put(
      this.endpoint + '/' + updatedTheme.theme_id,
      updatedTheme
    );
  }

  getOneById(id: number): Observable<Theme> {
    return this.httpClient.get<Theme>(this.endpoint + '/' + id);
  }
}
