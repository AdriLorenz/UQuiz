import { QuestionService } from 'src/app/services/question.service';
import { QuestionWithAnswers } from './../../../models/questionWithAnswers';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  ////////////////////////
  createQuestion(questionWithAnswers: QuestionWithAnswers) {
    try {
      this.questionService.createQuestionWithAnswers(questionWithAnswers);
      // display success popup
    } catch (err) {
      console.log(err);
      // display error message
    }
  }

  ngOnInit(): void {}
}
