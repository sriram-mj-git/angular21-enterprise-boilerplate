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
}
