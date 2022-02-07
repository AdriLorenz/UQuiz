import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionWithAnswers } from 'src/app/models/questionWithAnswers';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css'],
})
export class SingleQuestionComponent implements OnInit {
  @Input() questionWithAnswers: QuestionWithAnswers;
  constructor() {}

  ngOnInit(): void {
    console.log(this.questionWithAnswers);
  }

  // redirect to detail-question page
  showDetails() {}

  @Output() questionToDelete: EventEmitter<QuestionWithAnswers> =
    new EventEmitter();
  handleDelete() {
    this.questionToDelete.emit();
  }
}
