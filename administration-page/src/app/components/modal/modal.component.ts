import { Component, Input, OnInit, ElementRef, Inject } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(
    public modal: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  closeModal(): void {
    this.modal.close(false);
  }
  confirmModal(): void {
    this.modal.close(true);
  }

  ngOnInit() {}
}
