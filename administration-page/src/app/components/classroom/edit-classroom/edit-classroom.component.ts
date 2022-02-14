import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.css'],
})
export class EditClassroomComponent implements OnInit {
  classroom: Classroom;
  classroom_id: number;

  constructor(
    private classroomService: ClassroomService,
    private route: ActivatedRoute
  ) {}

  editClassroom() {
    try {
      this.classroomService
        .updateClassroom(this.classroom)
        .subscribe((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.classroom_id = +param.get('classroom_id')! || 0;
    });

    this.classroomService
      .getClassroomById(this.classroom_id)
      .subscribe((res) => {
        this.classroom = res;
      });
  }
}
