import { RoleService } from './../../../services/role.service';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/models/classroom';
import { Role } from './../../../models/role';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../../models/user';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private classroomService: ClassroomService,
    private roleService: RoleService,
    private route: ActivatedRoute
  ) {}

  user: User;
  user_id: number;
  roles: Role[];
  classrooms: Classroom[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => (this.user_id = +param.get('user_id')!)
    );

    this.userService
      .findById(this.user_id)
      .subscribe((res) => (this.user = res));

    this.classroomService
      .getClassrooms()
      .subscribe((res) => (this.classrooms = res));

    this.roleService.getRoles().subscribe((res) => (this.roles = res));
  }

  updateUser() {
    try {
      this.userService
        .updateUser(this.user)
        .subscribe((res) => console.log(res));
      // display success message;
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
