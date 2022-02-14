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
    try {
      console.log(this.theme);
      this.themeService
        .updateTheme(this.uploadForm)
        .subscribe((res) => console.log(res));

      await this.delay(1000);

      this.router.navigate([this.location.back()]).then(() => {
        window.location.reload();
      });
      // display success message;
    } catch (error) {
      console.log(error);
      // display error message
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
