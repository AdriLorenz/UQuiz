import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-question-button',
  templateUrl: './create-question-button.component.html',
  styleUrls: ['./create-question-button.component.css'],
})
export class CreateQuestionButtonComponent implements OnInit {
  @Input() theme_name: string;
  @Input() topic_name: string;

  goToCreateQuestionPage() {
    this.router.navigateByUrl('/questions/create');
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
