import { Component, input, output } from '@angular/core';
import { Task } from '../../../api-contract/models/task.model';
import { HasPermissionDirective } from '../../../shared/directives/has-permission.directive';

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
