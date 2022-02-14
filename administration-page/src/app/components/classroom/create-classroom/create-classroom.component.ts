import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.css'],
})
export class CreateClassroomComponent implements OnInit {
  classroom: Classroom;
  delay = (ms) => new Promise((res) => setTimeout(res, ms));

  constructor(
    private classroomService: ClassroomService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.classroom = new Classroom(0, '');
  }

  async createClassroom() {
    try {
      this.classroomService
        .createClassroom(this.classroom)
        .subscribe((data) => {
          console.log(data);
        });

      await this.delay(1000);

      this.router.navigate([this.location.back()]).then(() => {
        window.location.reload();
      });
      // display success message
    } catch (error) {
      console.log(error);
      //display error message
    }
  }

  onSubmit() {
    this.createClassroom();
  }
}
