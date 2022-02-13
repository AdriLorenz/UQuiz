import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-classroom-button',
  templateUrl: './create-classroom-button.component.html',
  styleUrls: ['./create-classroom-button.component.css'],
})
export class CreateClassroomButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreateClassroomPage() {
    this.router.navigateByUrl('/classrooms/create');
  }
}
