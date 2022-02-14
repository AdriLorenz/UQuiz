import { QuestionService } from 'src/app/services/question.service';
import { QuestionWithAnswers } from './../../../models/questionWithAnswers';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  questionWithAnswers: QuestionWithAnswers;
  topic_id: number;
  answers: Answer[];
  wrongAnswer1: Answer;
  wrongAnswer2: Answer;
  correctAnswer: Answer;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.topic_id = +params.get('topic_id_fk')! || 0;
    });
    this.answers = [];

    this.correctAnswer = new Answer(0, '', true, 0);
    this.wrongAnswer1 = new Answer(0, '', false, 0);
    this.wrongAnswer2 = new Answer(0, '', false, 0);

    this.answers.push(this.correctAnswer, this.wrongAnswer1, this.wrongAnswer2);

    this.questionWithAnswers = new QuestionWithAnswers(
      0,
      '',
      0,
      0,
      this.answers
    );

    console.log(this.answers[0]);
  }

  ////////////////////////
  createQuestion() {
    try {
      this.questionService
        .createQuestionWithAnswers(this.questionWithAnswers, this.topic_id)
        .subscribe((data) => {
          console.log(data);
        });
      // display success popup
    } catch (err) {
      console.log(err);
      // display error message
    }
  }

  onSubmit() {
    this.createQuestion();
  }
}
