import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import { TopicService } from 'src/app/services/topic.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css'],
})
export class EditTopicComponent implements OnInit {
  delay = (ms) => new Promise((res) => setTimeout(res, ms));
  public topic: Topic;
  topic_id: number;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    public modal: MatDialog,
    private location: Location,
    private router: Router
  ) {}

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

  async updateTopic() {
    try {
      this.topicService
        .updateTopic(this.topic)
        .subscribe((res) => console.log(res));

      await this.delay(1000);

      this.router.navigate([this.location.back()]).then(() => {
        window.location.reload();
      });
      // display success message;
    } catch (error) {
      console.log(error);
      // display error message
    }
  }

  showModal(): void {
    this.modal
      .open(ModalComponent, {
        data: `Do you want to edit this?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.updateTopic();
        } else {
        }
      });
  }
}
