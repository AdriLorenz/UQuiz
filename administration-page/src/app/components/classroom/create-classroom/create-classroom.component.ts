import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.css'],
})
export class CreateClassroomComponent implements OnInit {
  classroom: Classroom;

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.classroom = new Classroom(0, '');
  }

  createClassroom() {
    try {
      this.classroomService
        .createClassroom(this.classroom)
        .subscribe((data) => {
          console.log(data);
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
