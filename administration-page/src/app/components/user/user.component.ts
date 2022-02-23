import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ClassroomWithUsers } from 'src/app/models/classroomWithUsers';
import { ClassroomService } from 'src/app/services/classroom.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public classroomName: string;
  classroomWithUsers: ClassroomWithUsers;

  constructor(
    private userService: UserService,
    private classroomService: ClassroomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => (this.classroomName = params.get('classroom_name') || '')
    );

    this.classroomService
      .getUsersByClassroomName(this.classroomName)
      .subscribe((data) => {
        console.log(data);
        this.classroomWithUsers = data;
        console.log(this.classroomWithUsers);
      });
  }

  deleteUser(userToDelete: User) {
    try {
      this.userService.deleteUser(userToDelete.user_id);
      this.userService
        .deleteUser(userToDelete.user_id)
        .subscribe((res) => console.log(res));
      this.classroomWithUsers.users.splice(
        this.classroomWithUsers.users.indexOf(userToDelete),
        1
      );
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
