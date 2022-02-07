export class Theme {
  public theme_id: number;
  public theme_name: string;

  constructor($theme_id: number, $theme_name: string) {
    this.theme_id = $theme_id;
    this.theme_name = $theme_name;
  }
}
