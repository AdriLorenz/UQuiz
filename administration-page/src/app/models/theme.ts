import { Topic } from './topic';

export class Theme {
  public theme_id: number;
  public theme_name: string;
  public topics: Topic[];

  constructor($theme_id: number, $theme_name: string, $topic: Topic[]) {
    this.theme_id = $theme_id;
    this.theme_name = $theme_name;
    this.topics = $topic;
  }
}
