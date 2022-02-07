import { User } from './../../../models/user';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Input() user: User;

  ngOnInit(): void {}

  updateUser(updatedUserData: User) {
    try {
      this.userService.updateUser(updatedUserData);
      // display success message;
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
