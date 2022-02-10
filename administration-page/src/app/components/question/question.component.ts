import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionWithAnswers } from 'src/app/models/questionWithAnswers';
import { QuestionService } from 'src/app/services/question.service';
import { TopicService } from 'src/app/services/topic.service';
import { TopicWithQuestions } from 'src/app/models/topicWithQuestions';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  public topicWithQuestions: TopicWithQuestions;
  public topic_name: string;
  public theme_name: string;
  public modal: ModalComponent;

  constructor(
    private questionService: QuestionService,
    private topicService: TopicService,
    private route: ActivatedRoute
  ) {}

  deleteQuestion(questionToDelete: QuestionWithAnswers) {
    try {
      this.questionService
        .deleteQuestionWithAnswers(questionToDelete.question_id)
        .subscribe((res) => console.log(res));

      this.topicWithQuestions.questions.splice(
        this.topicWithQuestions.questions.indexOf(questionToDelete),
        1
      );
      // display success popup
    } catch (err) {
      console.log(err);
      // display error popup
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.theme_name = params.get('theme_name') || '';
      this.topic_name = params.get('topic_name') || '';
    });

    this.topicService
      .getOneTopicWithQuestions(this.topic_name)
      .subscribe((data) => {
        {
          this.topicWithQuestions = data;
          console.log(this.topicWithQuestions);
        }
      });
  }

  openModal() {}
}
