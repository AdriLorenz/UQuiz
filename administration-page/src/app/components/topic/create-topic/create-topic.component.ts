import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from 'src/app/models/theme';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css'],
})
export class CreateTopicComponent implements OnInit {
  theme_id: number;
  topic: Topic;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.theme_id = +params.get('theme_id_fk')! || 0;
    });

    this.topic = new Topic(0, '', this.theme_id);
  }

  createTopic() {
    try {
      this.topicService
        .createTopic(this.topic, this.theme_id)
        .subscribe((data) => {
          console.log(data);
        });
      // display success message
    } catch (error) {
      console.log(error);
      //display error message
    }
  }

  onSubmit() {
    this.createTopic();
  }
}
