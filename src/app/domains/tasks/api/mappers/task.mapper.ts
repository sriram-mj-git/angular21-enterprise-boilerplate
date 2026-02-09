import { TaskDto } from '../dtos/task.dto';
import { Task } from '../../models/task.model';

export function mapTaskDtoToModel(dto: TaskDto): Task {
  return {
    id: dto.id,
    title: dto.title,
    completed: dto.completed,
  };
}
