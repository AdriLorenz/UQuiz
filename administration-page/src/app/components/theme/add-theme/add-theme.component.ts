import { ThemeService } from 'src/app/services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent implements OnInit {
  theme: Theme;
  public themeToCreate: Theme;
  uploadForm: FormGroup;

  constructor(
    private themeService: ThemeService,
    private formBuilder: FormBuilder
  ) {
    this.uploadForm = this.formBuilder.group({
      customFile: [''],
    });
  }

  ngOnInit(): void {
    this.themeToCreate = new Theme(0, '', '');
  }

  createTheme() {
    try {
      this.themeService.createTheme(this.themeToCreate).subscribe((data) => {
        console.log(data);
        this.themeToCreate;
      });
      // display success message
    } catch (error) {
      console.log(error);
      //display error message
    }
  }

  onSubmit() {
    this.createTheme();
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // this.uploadForm.get('customFile').setValue(file);
    }
  }
}
