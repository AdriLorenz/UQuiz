import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { ModalComponent } from '../../modal/modal.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-single-classroom',
  templateUrl: './single-classroom.component.html',
  styleUrls: ['./single-classroom.component.css'],
})
export class SingleClassroomComponent implements OnInit {
  @Input() classroom: Classroom;

  constructor(public modal: MatDialog) {}

  ngOnInit(): void {}

  @Output() classroomToDelete: EventEmitter<Classroom> = new EventEmitter();
  handleDelete() {
    this.classroomToDelete.emit();
  }

  showModal(): void {
    this.modal
      .open(ModalComponent, {
        data: `Do you want to delete this?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.classroomToDelete.emit();
        } else {
        }
      });
  }
}
