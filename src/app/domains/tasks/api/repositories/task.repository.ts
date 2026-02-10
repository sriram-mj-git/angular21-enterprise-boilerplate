import { inject, Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';

import { HttpService } from '../../../../core/services/http.service';
import { CacheService } from '../../../../core/services/cache.service';
import { Task } from '../../models/task.model';
import { TaskDto } from '../dtos/task.dto';
import { mapTaskDtoToModel } from '../mappers/task.mapper';

@Injectable({
  providedIn: 'root',
})
export class TaskRepository {
  private http = inject(HttpService);
  private cache = inject(CacheService);

  // getTasks() {
  //   return this.http.get<TaskDto[]>('/tasks').pipe(map((dtos) => dtos.map(mapTaskDtoToModel)));
  // }

  getTasks() {
    const cacheKey = 'tasks';

    const cached = this.cache.get<Task[]>(cacheKey);

    if (cached) return of(cached);

    return this.http.get<TaskDto[]>('/tasks').pipe(
      map((dtos) => dtos.map(mapTaskDtoToModel)),
      tap((tasks) => this.cache.set(cacheKey, tasks)),
    );
  }

  createTask(title: string) {
    return this.http.post<TaskDto>('/tasksss', { title }).pipe(map(mapTaskDtoToModel));
  }

  updateTask(id: string, title: string) {
    return this.http.put<TaskDto>(`/tasks/${id}`, { title }).pipe(map(mapTaskDtoToModel));
  }

  deleteTask(id: string) {
    return this.http.delete<void>(`/tasks/${id}`);
  }
}
