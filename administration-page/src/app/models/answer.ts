import { Question } from './question';

export class Answer {
  constructor(
    $answer_id: number,
    $answer_content: string,
    $answer_status: boolean,
    $question: Question,
    $id_question: number
  ) {
    this.answer_id = $answer_id;
    this.answer_content = $answer_content;
    this.answer_status = $answer_status;
    this.question = $question;
    this.id_question = $id_question;
  }

  private answer_id: number;
  private answer_content: string;
  private answer_status: boolean;
  private question: Question;
  private id_question: number;

  /**
   * Getter $answer_id
   * @return {number}
   */
  public get $answer_id(): number {
    return this.answer_id;
  }

  /**
   * Getter $answer_content
   * @return {string}
   */
  public get $answer_content(): string {
    return this.answer_content;
  }

  /**
   * Getter $answer_status
   * @return {boolean}
   */
  public get $answer_status(): boolean {
    return this.answer_status;
  }

  /**
   * Getter $question
   * @return {Question}
   */
  public get $question(): Question {
    return this.question;
  }

  /**
   * Getter $id_question
   * @return {number}
   */
  public get $id_question(): number {
    return this.id_question;
  }

  /**
   * Setter $answer_id
   * @param {number} value
   */
  public set $answer_id(value: number) {
    this.answer_id = value;
  }

  /**
   * Setter $answer_content
   * @param {string} value
   */
  public set $answer_content(value: string) {
    this.answer_content = value;
  }

  /**
   * Setter $answer_status
   * @param {boolean} value
   */
  public set $answer_status(value: boolean) {
    this.answer_status = value;
  }

  /**
   * Setter $question
   * @param {Question} value
   */
  public set $question(value: Question) {
    this.question = value;
  }

  /**
   * Setter $id_question
   * @param {number} value
   */
  public set $id_question(value: number) {
    this.id_question = value;
  }
}
