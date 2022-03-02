import { ThemeService } from 'src/app/services/theme.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent implements OnInit {
  theme: Theme;
  public themeToCreate: Theme;
  uploadForm: FormGroup;
  error = false;
  delay = (ms) => new Promise((res) => setTimeout(res, ms));

  constructor(
    private themeService: ThemeService,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    this.uploadForm = this.formBuilder.group({
      theme_name: '',
      theme_img_path: [null],
    });
  }

  ngOnInit(): void {
    this.themeToCreate = new Theme(0, '', '');
  }

  async createTheme() {
    console.log(this.uploadForm.value.theme_name);
    if (this.uploadForm.value.theme_name != '') {
      try {
        this.themeService.createTheme(this.uploadForm);
        // display success message
      } catch (error) {
        console.log(error);
        //display error message
      }
      await this.delay(1000);

      this.router.navigate([this.location.back()]).then(() => {
        window.location.reload();
      });
    } else {
      this.error = true;
    }
  }

  onSubmit() {
    this.createTheme();
  }

  onFileSelect(event) {
    // @ts-ignore: Object is possibly 'null'.
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      theme_img_path: file,
    });
    // @ts-ignore: Object is possibly 'null'.
    this.uploadForm.get('theme_img_path').updateValueAndValidity();
  }
}
