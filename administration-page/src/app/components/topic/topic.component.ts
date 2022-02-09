import { Topic } from './../../models/topic';
import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { ThemeWithTopics } from 'src/app/models/themeWithTopics';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  public themeName: string;

  themeWithTopics: ThemeWithTopics;

  constructor(
    private themeService: ThemeService,
    private topicService: TopicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => (this.themeName = params.get('theme_name') || '')
    );

    this.themeService.getTopicsByThemeName(this.themeName).subscribe((data) => {
      this.themeWithTopics = data;
      console.log(this.themeWithTopics.topics);
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
