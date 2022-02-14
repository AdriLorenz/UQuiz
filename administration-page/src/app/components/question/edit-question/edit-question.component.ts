import { QuestionService } from 'src/app/services/question.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionWithAnswers } from 'src/app/models/questionWithAnswers';
import { Answer } from 'src/app/models/answer';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css'],
})
export class EditQuestionComponent implements OnInit {
  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  question_id: number;

  questionWithAnswers: QuestionWithAnswers;

  wrongAnswer1: Answer;
  wrongAnswer2: Answer;
  correctAnswer: Answer;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    public modal: MatDialog,
    private location: Location,
    private router: Router
  ) {}

  async editQuestion() {
    let answers: Answer[] = [];
    answers.push(this.correctAnswer, this.wrongAnswer1, this.wrongAnswer2);

    this.questionWithAnswers.answers = answers;

    try {
      this.questionService
        .editQuestionWithAnswers(this.questionWithAnswers)
        .subscribe((res) => {
          console.log(res);
        });

      await this.delay(1000);

      this.router.navigate([this.location.back()]).then(() => {
        window.location.reload();
      });
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
        this.questionWithAnswers = data;

        let wrongAnswerCount = 2;

        this.questionWithAnswers.answers.forEach((answer) => {
          if (answer.answer_status) this.correctAnswer = answer;
          else if (wrongAnswerCount == 2) {
            this.wrongAnswer2 = answer;
            wrongAnswerCount--;
          } else this.wrongAnswer1 = answer;
        });
      });
  }

  showModal(): void {
    this.modal
      .open(ModalComponent, {
        data: `Do you want to edit this?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.editQuestion();
        } else {
        }
      });
  }
}
