import { Topic } from './../../../models/topic';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.css'],
})
export class SingleTopicComponent implements OnInit {
  @Input() topic: Topic;

  constructor() {}

  ngOnInit(): void {}
}
