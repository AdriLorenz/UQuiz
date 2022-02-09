import { QuestionWithAnswers } from './questionWithAnswers';
import { Topic } from './topic';

export class TopicWithQuestions extends Topic {
  public questions: QuestionWithAnswers[];

  constructor(
    $topic_id: number,
    $topic_name: string,
    $theme_id_fk: number,
    $questions: QuestionWithAnswers[]
  ) {
    super($topic_id, $topic_name, $theme_id_fk);
    this.questions = $questions;
  }
}
