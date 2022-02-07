import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteTheme(userToDelete: User) {
    try {
      this.userService.deleteUser(userToDelete.id);
      // display success message
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
