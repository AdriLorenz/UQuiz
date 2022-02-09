import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionWithAnswers } from 'src/app/models/questionWithAnswers';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css'],
})
export class SingleQuestionComponent implements OnInit {
  @Input() questionWithAnswers: QuestionWithAnswers;
  @Input() theme_name: string;
  @Input() topic_name: string;
  @Input() modal: ModalComponent;

  constructor() {}

  ngOnInit(): void {
    console.log(this.theme_name, this.topic_name);
  }

  // redirect to detail-question page
  showDetails() {}

  @Output() questionToDelete: EventEmitter<QuestionWithAnswers> =
    new EventEmitter();
  handleDelete() {
    this.questionToDelete.emit();
  }

  @Output() openModal: EventEmitter<ModalComponent> = new EventEmitter();
  open() {
    this.openModal.emit();
  }
}
