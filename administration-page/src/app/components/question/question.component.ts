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

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((data) => {
      {
        this.questions = data;
        console.log(this.questions);
      }

      this.questionService.getQuestionById(1).subscribe((data) => {
        this.myQuestion = data;
        console.log(this.myQuestion);
      });

      // this.questionService.createQuestion().subscribe((data: any) => {
      //   console.log(data);
      // });
    });
  }
}
