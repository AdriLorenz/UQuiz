import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  public questions: Array<Question> = [];
  public myQuestion: Question;

  constructor(
    private questionService: QuestionService,

    private router: Router,
    route: ActivatedRoute
  ) {}

  createQuestion(questionData: any) {
    try {
      this.questionService.createQuestion(questionData);
      // display success popup
    } catch (err) {
      console.log(err);
      // display error message
    }
  }

  deleteQuestion(question: Question) {
    try {
      this.questionService.deleteQuestion(question.question_id);
      // display success popup
    } catch (err) {
      console.log(err);
      // display error popup
    }
  }

  editQuestion(question: Question) {
    try {
      this.questionService.editQuestion(question);
      // display success popup
    } catch (error) {
      console.log(error);
      //display error popup
    }
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((data) => {
      {
        this.questions = data;
        console.log(this.questions);
      }
    });
  }
}
