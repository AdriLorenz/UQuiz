export class Role {
  private role_id: number;
  private role_name: string;

  constructor($role_id: number, $role_name: string) {
    this.role_id = $role_id;
    this.role_name = $role_name;
  }

  /**
   * Getter $role_id
   * @return {number}
   */
  public get $role_id(): number {
    return this.role_id;
  }

  /**
   * Getter $role_name
   * @return {string}
   */
  public get $role_name(): string {
    return this.role_name;
  }

  /**
   * Setter $role_id
   * @param {number} value
   */
  public set $role_id(value: number) {
    this.role_id = value;
  }

  /**
   * Setter $role_name
   * @param {string} value
   */
  public set $role_name(value: string) {
    this.role_name = value;
  }
}
