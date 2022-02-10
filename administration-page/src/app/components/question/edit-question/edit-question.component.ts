import { QuestionService } from 'src/app/services/question.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionWithAnswers } from 'src/app/models/questionWithAnswers';
import { Answer } from 'src/app/models/answer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css'],
})
export class EditQuestionComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}
  question_id: number;

  @Input() questionWithAnswers: QuestionWithAnswers;

  wrongAnswer1: Answer;
  wrongAnswer2: Answer;
  correctAnswer: Answer;

  // editQuestion(questionWithAnswers: QuestionWithAnswers) {
  editQuestion(formValue: any) {
    console.log(formValue, 1);
    console.log(this.questionWithAnswers.question_content);
    formValue.reset();
    let answers: Answer[];
    let currentWrongAnswer: number;

    this.questionWithAnswers.answers.forEach((answer) => {
      if (answer.answer_status) {
        answer.answer_content = formValue.correctAnswer;
      }
      answer.answer_content = formValue.wrongAnswer + currentWrongAnswer;
      currentWrongAnswer--;
    });

    const questionWithAnswers = new QuestionWithAnswers(
      this.questionWithAnswers.question_id,
      formValue.question_content,
      formValue.question_difficulty,
      this.questionWithAnswers.topic_id_fk,
      this.questionWithAnswers.answers
    );

    console.log(questionWithAnswers);

    try {
      this.questionService.editQuestionWithAnswers(questionWithAnswers);
      // display success popup
    } catch (error) {
      console.log(error);
      //display error popup
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => (this.question_id = +params.get('question_id')! || 0)
    );
    this.questionService
      .getQuestionWithAnswersById(this.question_id)
      .subscribe((data) => {
        console.log(data);
        this.questionWithAnswers = data;
        let wrongAnswerCount = 2;
        this.questionWithAnswers.answers.forEach((answer) => {
          if (answer.answer_status) {
            this.correctAnswer = answer;
          } else if (wrongAnswerCount == 2) this.wrongAnswer2 = answer;
          else this.wrongAnswer1 = answer;
        });
        console.log(this.questionWithAnswers.answers);
      });
  }
}
