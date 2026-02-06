import { PermissionResponseDto } from '../dtos/auth.dto';
import { User } from '../models/user.model';

export function mapPermissionDtoToUser(userId: string, dto: PermissionResponseDto): User {
  return {
    id: userId,
    roles: dto.roles as User['roles'],
    permissions: dto.permissions,
  };
}
