import { Topic } from './../../../models/topic';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.css'],
})
export class SingleTopicComponent implements OnInit {
  @Input() topic: Topic;

  @Output() topicToDelete: EventEmitter<Topic> = new EventEmitter();
  handleDelete() {
    this.topicToDelete.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
