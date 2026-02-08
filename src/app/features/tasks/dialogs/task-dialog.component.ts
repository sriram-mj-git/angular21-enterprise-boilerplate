import { Component, inject, signal, computed } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
})
export class TaskDialogComponent {
  dialogRef = inject(MatDialogRef<TaskDialogComponent>);

  title = signal('');

  isValid = computed(() => this.title().trim().length > 2);

  save() {
    if (!this.isValid()) return;

    this.dialogRef.close(this.title());
  }
}
