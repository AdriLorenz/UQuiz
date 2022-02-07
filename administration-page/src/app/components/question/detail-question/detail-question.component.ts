import { Component, Input, OnInit } from '@angular/core';
import { QuestionWithAnswers } from 'src/app/models/questionWithAnswers';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css'],
})
export class DetailQuestionComponent implements OnInit {
  @Input() questionWithAnswers: QuestionWithAnswers;

  constructor() {}

  ngOnInit(): void {}
}
