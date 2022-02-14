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
      // delete in db
      this.themeService
        .deleteTheme(themeToDelete.theme_id)
        .subscribe((res) => console.log(res));

      // delete in local array
      this.themes.splice(this.themes.indexOf(themeToDelete), 1);

      // display success message
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
