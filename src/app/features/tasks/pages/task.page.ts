import { Component, inject, OnInit } from '@angular/core';
import { TaskStore } from '../store/task.store';
import { TaskListComponent } from '../components/task-list.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../dialogs/task-dialog.component';
import { SkeletonCardComponent } from '../../../shared/ui/skeleton/skeleton-card.component';
import { SkeletonDirective } from '../../../shared/directives/skeleton.directive';

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
          this.store.addTask({
            id: crypto.randomUUID(),
            title,
            completed: false,
          });
        }
      });
  }

  deleteTask(id: string) {
    this.store.removeTask(id);
  }
}
