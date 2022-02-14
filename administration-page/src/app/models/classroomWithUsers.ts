import { Classroom } from './classroom';
import { Role } from './role';
import { User } from './user';
import { UserWithRoles } from './userWithRoles';

export class ClassroomWithUsers extends Classroom {
  public users: UserWithRoles[];

  constructor(
    $classroom_id: number,
    $classroom_name: string,
    $users: UserWithRoles[]
  ) {
    super($classroom_id, $classroom_name);
    this.users = $users;
  }
}
