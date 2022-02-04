export class Role {
  public role_id: number;
  public role_name: string;

  constructor($role_id: number, $role_name: string) {
    this.role_id = $role_id;
    this.role_name = $role_name;
  }
}
