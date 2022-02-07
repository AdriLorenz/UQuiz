export class Topic {
  public topic_id: number;
  public topic_name: string;
  public theme_id_fk: number;

  constructor($topic_id: number, $topic_name: string, $theme_id_fk: number) {
    this.topic_id = $topic_id;
    this.topic_name = $topic_name;
    this.theme_id_fk = $theme_id_fk;
  }
}
