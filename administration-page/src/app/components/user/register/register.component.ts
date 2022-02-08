import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { Role } from 'src/app/models/role';
import { ClassroomService } from 'src/app/services/classroom.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  classrooms: Classroom[];
  roles: Role[];
  constructor(
    private classroomService: ClassroomService,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.classroomService.getClassrooms().subscribe((data) => {
      this.classrooms = data;
    });

    this.roleService.getRoles().subscribe((data) => {
      this.roles = data;
    });

    console.log(this.classrooms);
  }
}
