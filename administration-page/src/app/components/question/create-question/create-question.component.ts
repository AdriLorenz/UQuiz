import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  constructor() {}

  @Output() newQuestion: EventEmitter<any> = new EventEmitter();

  handleNewQuestion(newQuestionData: {
    question_content: string;
    question_difficulty: string;
    topic_id_fk: number;
    wrongAnswer1: string;
    wrongAnswer2: string;
    correct_answer: string;
  }) {
    this.newQuestion.emit(newQuestionData);
  }

  ngOnInit(): void {}
}
