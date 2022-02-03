import { Theme } from './theme';

export class Topic {
  private topic_id: number;
  private topic_name: string;
  private theme_id_fk: number;
  private theme: Theme;

  constructor(
    $topic_id: number,
    $topic_name: string,
    $theme_id_fk: number,
    $theme: Theme
  ) {
    this.topic_id = $topic_id;
    this.topic_name = $topic_name;
    this.theme_id_fk = $theme_id_fk;
    this.theme = $theme;
  }

  /**
   * Getter $topic_id
   * @return {number}
   */
  public get $topic_id(): number {
    return this.topic_id;
  }

  /**
   * Getter $topic_name
   * @return {string}
   */
  public get $topic_name(): string {
    return this.topic_name;
  }

  /**
   * Getter $theme_id_fk
   * @return {number}
   */
  public get $theme_id_fk(): number {
    return this.theme_id_fk;
  }

  /**
   * Setter $topic_id
   * @param {number} value
   */
  public set $topic_id(value: number) {
    this.topic_id = value;
  }

  /**
   * Setter $topic_name
   * @param {string} value
   */
  public set $topic_name(value: string) {
    this.topic_name = value;
  }

  /**
   * Setter $theme_id_fk
   * @param {number} value
   */
  public set $theme_id_fk(value: number) {
    this.theme_id_fk = value;
  }
}
