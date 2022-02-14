import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  logIn() {
    try {
      console.log(this.myForm.value);
      this.loginService.loginUser(this.myForm.value).subscribe((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
