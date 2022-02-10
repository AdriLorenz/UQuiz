import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { ModalComponent } from '../../modal/modal.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-single-theme',
  templateUrl: './single-theme.component.html',
  styleUrls: ['./single-theme.component.css'],
})
export class SingleThemeComponent implements OnInit {
  @Input() theme: Theme;

  public serverLocation: string;

  constructor(public modal: MatDialog) {
    this.serverLocation = 'http://localhost:5000';
  }

  @Output() themeToDelete: EventEmitter<Theme> = new EventEmitter();
  handleDelete() {
    this.themeToDelete.emit();
  }

  showModal(): void {
    this.modal
      .open(ModalComponent, {
        data: `Do you want to delete this?`,
      })
      .afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.themeToDelete.emit();
        } else {
        }
      });
  }

  ngOnInit(): void {}
}
