import { Component, inject, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
})
export class TaskDialogComponent {
  dialogRef = inject(MatDialogRef<TaskDialogComponent>);

  title = signal('');

  save() {
    this.dialogRef.close(this.title());
  }
}
