import { ThemeService } from 'src/app/services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  createTheme(newThemeData: Theme) {
    try {
      this.themeService.createTheme(newThemeData);
      // display success message
    } catch (error) {
      console.log(error);
      //display error message
    }
  }
}
