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

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {}
}
