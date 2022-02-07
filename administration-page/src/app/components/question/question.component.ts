import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionWithAnswers } from 'src/app/models/questionWithAnswers';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  public questionsWithAnswers: Array<QuestionWithAnswers> = [];

  constructor(
    private questionService: QuestionService,

    private router: Router,
    route: ActivatedRoute
  ) {}

  createQuestion(questionWithAnswers: QuestionWithAnswers) {
    try {
      this.questionService.createQuestionWithAnswers(questionWithAnswers);
      // display success popup
    } catch (err) {
      console.log(err);
      // display error message
    }
  }

  deleteQuestion(questionWithAnswers: QuestionWithAnswers) {
    try {
      this.questionService.deleteQuestionWithAnswers(
        questionWithAnswers.question_id
      );
      // display success popup
    } catch (err) {
      console.log(err);
      // display error popup
    }
  }

  editQuestion(questionWithAnswers: QuestionWithAnswers) {
    try {
      this.questionService.editQuestionWithAnswers(questionWithAnswers);
      // display success popup
    } catch (error) {
      console.log(error);
      //display error popup
    }
  }

  ngOnInit(): void {
    this.questionService.getQuestionsWithAnswers().subscribe((data) => {
      {
        this.questionsWithAnswers = data;
        console.log(this.questionsWithAnswers);
      }
    });
  }
}
