import { Question } from './question';
import { Answer } from './answer';

export class QuestionWithAnswers extends Question {
  public answers: Answer[];

  constructor(
    $question_id: number,
    $question_content: string,
    $question_difficulty: number,
    $topic_id_fk: number,
    $answers: Answer[]
  ) {
    super($question_id, $question_content, $question_difficulty, $topic_id_fk);
    this.answers = $answers;
  }
}
