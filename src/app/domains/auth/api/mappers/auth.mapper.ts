import { User } from '../../models/user.model';
import { PermissionResponseDto } from '../dtos/auth.dto';

export function mapPermissionDtoToUser(userId: string, dto: PermissionResponseDto): User {
  return {
    id: userId,
    roles: dto.roles as User['roles'],
    permissions: dto.permissions,
  };
}
