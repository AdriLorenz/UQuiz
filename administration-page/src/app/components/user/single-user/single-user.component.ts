import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { ModalComponent } from '../../modal/modal.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent implements OnInit {
  @Input() user: User;
  @Input() classroom_name: string;

  constructor(public modal: MatDialog) {}

  ngOnInit(): void {}

  @Output() userToDelete: EventEmitter<User> = new EventEmitter();
  handleDelete() {
    this.userToDelete.emit();
  }

  showModal(): void {
    this.modal
      .open(ModalComponent, {
        data: `Do you want to delete this?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.userToDelete.emit();
        } else {
        }
      });
  }
}
