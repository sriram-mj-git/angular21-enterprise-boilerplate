export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  userId: string;
}

export interface PermissionResponseDto {
  roles: string[];
  permissions: string[];
}
