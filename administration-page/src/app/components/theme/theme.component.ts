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
    this.themeService.getThemes().subscribe((data) => {
      this.themes = data;
    });
  }

  deleteTheme(themeToDelete: Theme) {
    try {
      this.themeService.deleteTheme(themeToDelete.theme_id);
      // display success message
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
