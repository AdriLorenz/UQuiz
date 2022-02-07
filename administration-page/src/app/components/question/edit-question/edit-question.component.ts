import { QuestionService } from 'src/app/services/question.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionWithAnswers } from 'src/app/models/questionWithAnswers';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css'],
})
export class EditQuestionComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  @Input() questionWithAnswers: QuestionWithAnswers;

  editQuestion(questionWithAnswers: QuestionWithAnswers) {
    try {
      this.questionService.editQuestionWithAnswers(questionWithAnswers);
      // display success popup
    } catch (error) {
      console.log(error);
      //display error popup
    }
  }

  ngOnInit(): void {}
}
