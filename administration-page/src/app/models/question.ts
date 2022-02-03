import { Topic } from './topic';

export class Question {
  private question_id: number;
  private question_content: string;
  private question_difficulty: number;
  private topic_id_fk: number;
  private topic: Topic;

  constructor(
    $question_id: number,
    $question_content: string,
    $question_difficulty: number,
    $topic_id_fk: number,
    $topic: Topic
  ) {
    this.question_id = $question_id;
    this.question_content = $question_content;
    this.question_difficulty = $question_difficulty;
    this.topic_id_fk = $topic_id_fk;
    this.topic = $topic;
  }

  /**
   * Getter $question_id
   * @return {number}
   */
  public get $question_id(): number {
    return this.question_id;
  }

  /**
   * Getter $question_content
   * @return {string}
   */
  public get $question_content(): string {
    return this.question_content;
  }

  /**
   * Getter $question_difficulty
   * @return {number}
   */
  public get $question_difficulty(): number {
    return this.question_difficulty;
  }

  /**
   * Getter $topic_id_fk
   * @return {number}
   */
  public get $topic_id_fk(): number {
    return this.topic_id_fk;
  }

  /**
   * Setter $question_id
   * @param {number} value
   */
  public set $question_id(value: number) {
    this.question_id = value;
  }

  /**
   * Setter $question_content
   * @param {string} value
   */
  public set $question_content(value: string) {
    this.question_content = value;
  }

  /**
   * Setter $question_difficulty
   * @param {number} value
   */
  public set $question_difficulty(value: number) {
    this.question_difficulty = value;
  }

  /**
   * Setter $topic_id_fk
   * @param {number} value
   */
  public set $topic_id_fk(value: number) {
    this.topic_id_fk = value;
  }

  /**
   * Getter $topic
   * @return {Topic}
   */
  public get $topic(): Topic {
    return this.topic;
  }

  /**
   * Setter $topic
   * @param {Topic} value
   */
  public set $topic(value: Topic) {
    this.topic = value;
  }
}
