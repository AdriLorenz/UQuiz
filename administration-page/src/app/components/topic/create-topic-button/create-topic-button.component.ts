import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-topic-button',
  templateUrl: './create-topic-button.component.html',
  styleUrls: ['./create-topic-button.component.css'],
})
export class CreateTopicButtonComponent implements OnInit {
  @Input() theme_name: string;

  constructor() {}

  ngOnInit(): void {}
}
