import { Topic } from './../../models/topic';
import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  topics: Topic[];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topicService.getTopics().subscribe((data) => {
      this.topics = data;
    });
  }

  deleteTopic(topicToDelete: Topic) {
    try {
      this.topicService.deleteTopic(topicToDelete.topic_id);
      // display success message
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
