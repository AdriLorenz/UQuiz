import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
})
export class ClassroomComponent implements OnInit {
  classrooms: Classroom[];

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.classroomService.getClassrooms().subscribe((data) => {
      this.classrooms = data;
    });
  }

  deleteClassroom(classroomToDelete: Classroom) {
    try {
      // delete in db
      this.classroomService
        .deleteClassroom(classroomToDelete.classroom_id)
        .subscribe((res) => console.log(res));

      // delete in local array
      this.classrooms.splice(this.classrooms.indexOf(classroomToDelete), 1);

      // display success message
    } catch (error) {
      console.log(error);
      // display error message
    }
  }

  updateClassroom(classroomToUpdate: Classroom) {
    try {
      this.classroomService.updateClassroom(classroomToUpdate);
    } catch (error) {
      console.log(error);
    }
  }
}
