import { Role } from './role';

export class User {
  constructor(
    $id: number,
    $user_name: string,
    $user_email: string,
    $user_password: string,
    $user_score: number,
    $user_games_played: number,
    $classroom_id_fk: number,
    $role_id_fk: number,
    $role: Role
  ) {
    this.id = $id;
    this.user_name = $user_name;
    this.user_email = $user_email;
    this.user_password = $user_password;
    this.user_score = $user_score;
    this.user_games_played = $user_games_played;
    this.classroom_id_fk = $classroom_id_fk;
    this.role_id_fk = $role_id_fk;
    this.role = $role;
  }
  private id: number;
  private user_name: string;
  private user_email: string;
  private user_password: string;
  private user_score: number;
  private user_games_played: number;
  private classroom_id_fk: number;
  private role_id_fk: number;
  private role: Role;

  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $user_name
   * @return {string}
   */
  public get $user_name(): string {
    return this.user_name;
  }

  /**
   * Getter $user_email
   * @return {string}
   */
  public get $user_email(): string {
    return this.user_email;
  }

  /**
   * Getter $user_password
   * @return {string}
   */
  public get $user_password(): string {
    return this.user_password;
  }

  /**
   * Getter $user_score
   * @return {number}
   */
  public get $user_score(): number {
    return this.user_score;
  }

  /**
   * Getter $user_games_played
   * @return {number}
   */
  public get $user_games_played(): number {
    return this.user_games_played;
  }

  /**
   * Getter $classroom_id_fk
   * @return {number}
   */
  public get $classroom_id_fk(): number {
    return this.classroom_id_fk;
  }

  /**
   * Getter $role_id_fk
   * @return {number}
   */
  public get $role_id_fk(): number {
    return this.role_id_fk;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Setter $user_name
   * @param {string} value
   */
  public set $user_name(value: string) {
    this.user_name = value;
  }

  /**
   * Setter $user_email
   * @param {string} value
   */
  public set $user_email(value: string) {
    this.user_email = value;
  }

  /**
   * Setter $user_password
   * @param {string} value
   */
  public set $user_password(value: string) {
    this.user_password = value;
  }

  /**
   * Setter $user_score
   * @param {number} value
   */
  public set $user_score(value: number) {
    this.user_score = value;
  }

  /**
   * Setter $user_games_played
   * @param {number} value
   */
  public set $user_games_played(value: number) {
    this.user_games_played = value;
  }

  /**
   * Setter $classroom_id_fk
   * @param {number} value
   */
  public set $classroom_id_fk(value: number) {
    this.classroom_id_fk = value;
  }

  /**
   * Setter $role_id_fk
   * @param {number} value
   */
  public set $role_id_fk(value: number) {
    this.role_id_fk = value;
  }

  /**
   * Getter $role
   * @return {Role}
   */
  public get $role(): Role {
    return this.role;
  }

  /**
   * Setter $role
   * @param {Role} value
   */
  public set $role(value: Role) {
    this.role = value;
  }
}
