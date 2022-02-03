export class Theme {
  private theme_id: number;

  constructor($theme_id: number, $theme_name: string) {
    this.theme_id = $theme_id;
    this.theme_name = $theme_name;
  }

  /**
   * Getter $theme_id
   * @return {number}
   */
  public get $theme_id(): number {
    return this.theme_id;
  }

  /**
   * Getter $theme_name
   * @return {string}
   */
  public get $theme_name(): string {
    return this.theme_name;
  }

  /**
   * Setter $theme_id
   * @param {number} value
   */
  public set $theme_id(value: number) {
    this.theme_id = value;
  }

  /**
   * Setter $theme_name
   * @param {string} value
   */
  public set $theme_name(value: string) {
    this.theme_name = value;
  }
  private theme_name: string;
}
