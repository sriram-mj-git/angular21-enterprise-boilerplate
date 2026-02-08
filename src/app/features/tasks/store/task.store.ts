import { Injectable, inject, signal } from '@angular/core';
import { Task } from '../../../api-contract/models/task.model';
import { TaskRepository } from '../services/task.repository';

@Injectable({ providedIn: 'root' })
export class TaskStore {
  private repo = inject(TaskRepository);

  private tasksSignal = signal<Task[]>([]);
  private loadingSignal = signal(false);

  tasks = this.tasksSignal.asReadonly();
  loading = this.loadingSignal.asReadonly();

  loadTasks() {
    this.loadingSignal.set(true);

    this.repo.getTasks().subscribe((tasks) => {
      this.tasksSignal.set(tasks);
      this.loadingSignal.set(false);
    });
  }

  addTask(task: Task) {
    this.tasksSignal.update((list) => [...list, task]);
  }

  removeTask(id: string) {
    this.tasksSignal.update((list) => list.filter((t) => t.id !== id));
  }
}
