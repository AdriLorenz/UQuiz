import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css'],
})
export class EditTopicComponent implements OnInit {
  constructor(private topicService: TopicService) {}

  @Input() topic: Topic;

  ngOnInit(): void {}

  updateTopic(updatedTopicData: Topic) {
    try {
      this.topicService.updateTopic(updatedTopicData);
      // display success message;
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
