import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css'],
})
export class CreateTopicComponent implements OnInit {
  constructor(private topicService: TopicService) {}

  ngOnInit(): void {}

  createTopic(newTopicData: Topic) {
    try {
      this.topicService.createTopic(newTopicData);
      // display success message
    } catch (error) {
      console.log(error);
      //display error message
    }
  }
}
