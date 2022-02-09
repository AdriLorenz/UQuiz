import { Theme } from './theme';
import { Topic } from './topic';

export class ThemeWithTopics extends Theme {
  public topics: Topic[];

  constructor(
    $theme_id: number,
    $theme_name: string,
    $theme_img_path: string,
    $topics: Topic[]
  ) {
    super($theme_id, $theme_name, $theme_img_path);
    this.theme_id = $theme_id;
    this.theme_name = $theme_name;
    this.theme_img_path = $theme_img_path;
    this.topics = $topics;
  }
}
