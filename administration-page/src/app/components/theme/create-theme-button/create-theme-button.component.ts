import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-theme-button',
  templateUrl: './create-theme-button.component.html',
  styleUrls: ['./create-theme-button.component.css'],
})
export class CreateThemeButtonComponent implements OnInit {
  goToCreateThemePage() {
    this.router.navigateByUrl('/themes/create');
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
