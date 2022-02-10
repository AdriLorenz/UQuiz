import { Topic } from './../../../models/topic';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.css'],
})
export class SingleTopicComponent implements OnInit {
  @Input() topic: Topic;
  @Input() theme_name: string;

  @Output() topicToDelete: EventEmitter<Topic> = new EventEmitter();
  handleDelete() {
    this.topicToDelete.emit();
  }

  constructor(public modal: MatDialog) {}

  ngOnInit(): void {
    console.log(this.topic, this.theme_name);
  }

  showModal(): void {
    this.modal
      .open(ModalComponent, {
        data: `Do you want to delete this?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.topicToDelete.emit();
        } else {
        }
      });
  }
}
