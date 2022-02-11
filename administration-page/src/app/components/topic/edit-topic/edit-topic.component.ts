import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css'],
})
export class EditTopicComponent implements OnInit {
  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute
  ) {}

  public topic: Topic;
  topic_id: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => (this.topic_id = +params.get('topic_id')! || 0)
    );

    this.topicService.getOne(this.topic_id).subscribe((res) => {
      this.topic = res;
      console.log(this.topic);
      console.log(1);
    });
  }

  updateTopic() {
    try {
      this.topicService
        .updateTopic(this.topic)
        .subscribe((res) => console.log(res));
      // display success message;
    } catch (error) {
      console.log(error);
      // display error message
    }
  }
}
