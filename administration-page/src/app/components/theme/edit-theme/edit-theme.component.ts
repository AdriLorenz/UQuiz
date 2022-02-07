import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/models/theme';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css'],
})
export class EditThemeComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  @Input() theme: Theme;

  ngOnInit(): void {}

  updateTheme(updatedThemeData: Theme) {
    try {
      this.themeService.updateTheme(updatedThemeData);
      // display success message;
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
