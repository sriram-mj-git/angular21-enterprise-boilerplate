import { Component, input, output } from '@angular/core';
import { HasPermissionDirective } from '../../../../design-system/directives/has-permission.directive';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [HasPermissionDirective],
})
export class TaskListComponent {
  tasks = input.required<Task[]>();

  deleteTask = output<string>();
  createTask = output<void>();
}
