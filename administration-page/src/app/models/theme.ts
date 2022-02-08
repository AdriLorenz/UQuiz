export class Theme {
  public theme_id: number;
  public theme_name: string;
  public theme_img_path: string;

  constructor($theme_id: number, $theme_name: string, $theme_img_path: string) {
    this.theme_id = $theme_id;
    this.theme_name = $theme_name;
    this.theme_img_path = $theme_img_path;
  }
}
