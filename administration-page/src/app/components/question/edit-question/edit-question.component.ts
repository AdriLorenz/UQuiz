import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css'],
})
export class EditQuestionComponent implements OnInit {
  constructor() {}

  @Input() question: Question;

  @Output() updatedQuestion: EventEmitter<any> = new EventEmitter();
  handleEdit(editedQuestionData: any) {
    const editedQuestion = {
      question_id: this.question.question_id,
      question_content: editedQuestionData.question_content,
      question_difficulty: editedQuestionData.question_difficulty,
      wrongAnswer1: editedQuestionData.wrongAnswer1,
      wrongAnswer2: editedQuestionData.wrongAnswer2,
      correctAnswer: editedQuestionData.correctAnswer,
      topic_id_fk: editedQuestionData.topic_id_fk,
    };

    this.updatedQuestion.emit(editedQuestion);
  }

  ngOnInit(): void {}
}
