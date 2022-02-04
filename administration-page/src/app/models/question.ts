import { Topic } from './topic';
import { Answer } from './answer';

export class Question {
  public question_id: number;
  public question_content: string;
  public question_difficulty: number;
  public topic_id_fk: number;
  public answers: Answer[];
  public topic: Topic;

  constructor(
    $question_id: number,
    $question_content: string,
    $question_difficulty: number,
    $topic_id_fk: number,
    $answers: Answer[],
    $topic: Topic
  ) {
    this.question_id = $question_id;
    this.question_content = $question_content;
    this.question_difficulty = $question_difficulty;
    this.topic_id_fk = $topic_id_fk;
    this.answers = $answers;
    this.topic = $topic;
  }
}
