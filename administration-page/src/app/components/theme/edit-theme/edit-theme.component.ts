import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { Theme } from 'src/app/models/theme';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css'],
})
export class EditThemeComponent implements OnInit {
  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  theme_id: number;
  theme: Theme;
  error = false;

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    this.uploadForm = this.formBuilder.group({
      theme_name: '',
      theme_img_path: [null],
    });
  }

  uploadForm: FormGroup;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.theme_id = +params.get('theme_id')! || 0;
      console.log();
    });
    try {
      this.themeService
        .getOneById(this.theme_id)
        .subscribe((data) => (this.theme = data));
    } catch (error) {
      console.log(error);
    }
  }

  async updateTheme() {
    if (this.theme.theme_name != '') {
      if (this.uploadForm.value.theme_img_path) {
        try {
          this.themeService
            .updateTheme(this.uploadForm, this.theme.theme_id)
            .subscribe((res) => console.log(res));
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          this.themeService
            .updateThemeName(this.theme.theme_id, this.theme.theme_name)
            .subscribe((res) => console.log(res));
        } catch (error) {
          console.log(error);
        }
      }
      await this.delay(1000);

      this.router.navigate([this.location.back()]).then(() => {
        window.location.reload();
      });
    } else {
      this.error = true;
    }
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
