import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

import { HttpService } from '../../../core/services/http.service';
import { TaskDto } from '../../../api-contract/dtos/task.dto';
import { mapTaskDtoToModel } from '../../../api-contract/mappers/task.mapper';

@Injectable({
  providedIn: 'root',
})
export class TaskRepository {
  private http = inject(HttpService);

  getTasks() {
    return this.http.get<TaskDto[]>('/tasks').pipe(map((dtos) => dtos.map(mapTaskDtoToModel)));
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
