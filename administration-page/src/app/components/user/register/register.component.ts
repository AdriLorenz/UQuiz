import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { ClassroomService } from 'src/app/services/classroom.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  classrooms: Classroom[];
  roles: Role[];
  user: User;
  myForm: FormGroup;
  constructor(
    private classroomService: ClassroomService,
    private roleService: RoleService,
    private userService: UserService,
    private location: Location,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.classroomService.getClassrooms().subscribe((data) => {
      this.classrooms = data;
    });

    this.roleService.getRoles().subscribe((data) => {
      this.roles = data;
    });

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)],
      repeatPassword: ['', RxwebValidators.compare({ fieldName: 'password' })],
      role_id_fk: [0, Validators.required],
      classroom_id_fk: [0, Validators.required],
    });
  }

  async createUser(form: FormGroup) {
    try {
      this.user = new User(
        0,
        form.value.name,
        form.value.email,
        form.value.password,
        0,
        0,
        form.value.classroom_id_fk,
        form.value.role_id_fk
      );

      this.userService.createUser(this.user).subscribe((data) => {
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

  onSubmit(form: FormGroup) {
    this.createUser(form);
  }
}
