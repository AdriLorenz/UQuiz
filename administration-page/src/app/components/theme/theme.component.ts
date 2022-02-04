import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements OnInit {
  themes: Theme[];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService
      .getThemesWithTopicWithQuestionsWithAnswers()
      .subscribe((data) => {
        this.themes = data;
      });
  }
}
