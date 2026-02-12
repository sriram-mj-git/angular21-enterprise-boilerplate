import { inject, signal } from '@angular/core';
import { TaskRepository } from '../api/repositories/task.repository';
import { LoggerService } from '@core';
import { Task } from '../models/task.model';

export class TaskStore {
  private repo = inject(TaskRepository);
  private logger = inject(LoggerService);

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

  createTask(title: string) {
    const tempTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    // Optimistic UI
    this.tasksSignal.update((list) => [...list, tempTask]);

    this.repo.createTask(title).subscribe({
      next: (realTask) => {
        // Replace temp with real
        this.tasksSignal.update((list) => list.map((t) => (t.id === tempTask.id ? realTask : t)));
      },

      error: (err) => {
        this.logger.error('Task create failed', err);
        this.removeTask(tempTask.id);
      },
    });
  }

  deleteTask(id: string) {
    const backup = this.tasksSignal();

    this.removeTask(id);

    this.repo.deleteTask(id).subscribe({
      error: (err) => {
        this.logger.error('Task delete failed', err);

        this.tasksSignal.set(backup);
      },
    });
  }

  updateTask(id: string, title: string) {
    const backup = this.tasksSignal();

    this.tasksSignal.update((list) => list.map((t) => (t.id === id ? { ...t, title } : t)));

    this.repo.updateTask(id, title).subscribe({
      error: () => {
        this.tasksSignal.set(backup);
      },
    });
  }
}
