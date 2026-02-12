import { Component, inject, OnInit } from '@angular/core';
import { TaskStore } from '../../store/task.store';
import { MatDialog } from '@angular/material/dialog';
import { TaskListComponent } from '../components/task-list.component';
import { TaskDialogComponent } from '../dialogs/task-dialog.component';

import { SkeletonDirective } from '@design-system/directives/skeleton.directive';
import { SkeletonCardComponent } from '@design-system/skeleton';

@Component({
  selector: 'app-task-page',
  imports: [TaskListComponent, SkeletonCardComponent, SkeletonDirective],
  templateUrl: './task.page.html',
})
export class TaskPage implements OnInit {
  store = inject(TaskStore);
  dialog = inject(MatDialog);

  ngOnInit() {
    this.store.loadTasks();
  }

  openCreateDialog() {
    this.dialog
      .open(TaskDialogComponent)
      .afterClosed()
      .subscribe((title) => {
        if (title) {
          this.store.createTask(title);
        }
      });
  }

  deleteTask(id: string) {
    this.store.removeTask(id);
  }
}
