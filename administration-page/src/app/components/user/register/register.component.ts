import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { ClassroomService } from 'src/app/services/classroom.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  classrooms: Classroom[];
  roles: Role[];
  user: User;
  constructor(
    private classroomService: ClassroomService,
    private roleService: RoleService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.classroomService.getClassrooms().subscribe((data) => {
      this.classrooms = data;
    });

    this.roleService.getRoles().subscribe((data) => {
      this.roles = data;
    });

    this.user = new User(0, '', '', '', 0, 0, 0, 0);
  }

  createUser() {
    try {
      this.userService.createUser(this.user).subscribe((data) => {
        console.log(data);
      });
      // display success message
    } catch (error) {
      console.log(error);
      //display error message
    }
  }

  onSubmit() {
    this.createUser();
  }
}
