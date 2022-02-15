import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from 'src/app/services/login-logout.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  unauthorizedError: boolean;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  logIn() {
    this.authService
      .validate(this.myForm.value.email, this.myForm.value.password)!
      .then((response) => {
        this.authService.setUserInfo({ user: response });
        this.router.navigate(['themes']);
      })
      .catch((error) => {
        this.unauthorizedError = true;
      });
  }
}
