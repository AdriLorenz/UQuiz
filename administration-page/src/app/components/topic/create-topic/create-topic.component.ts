import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from 'src/app/models/theme';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css'],
})
export class CreateTopicComponent implements OnInit {
  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  theme_id: number;
  topic: Topic;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.theme_id = +params.get('theme_id_fk')! || 0;
    });

    this.topic = new Topic(0, '', this.theme_id);
  }

  async createTopic() {
    try {
      this.topicService
        .createTopic(this.topic, this.theme_id)
        .subscribe((data) => {
          console.log('asdfsadf');
          console.log(data);
        });

      // await this.delay(1000);

      // this.router.navigate([this.location.back()]).then(() => {
      //   window.location.reload();
      // });
      // display success message
    } catch (error: any) {
      console.log(error);
      alert(error.text);
      //display error message
    }
  }

  onSubmit() {
    this.createTopic();
  }
}
