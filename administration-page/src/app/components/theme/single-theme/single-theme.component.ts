import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-single-theme',
  templateUrl: './single-theme.component.html',
  styleUrls: ['./single-theme.component.css'],
})
export class SingleThemeComponent implements OnInit {
  @Input() theme: Theme;

  public serverLocation: string;

  @Output() themeToDelete: EventEmitter<Theme> = new EventEmitter();
  handleDelete() {
    this.themeToDelete.emit();
  }
  constructor() {
    this.serverLocation = 'http://localhost:5000';
  }

  ngOnInit(): void {}
}
