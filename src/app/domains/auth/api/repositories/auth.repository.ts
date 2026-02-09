import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../../../core/services/http.service';
import { LoginResponseDto, PermissionResponseDto } from '../dtos/auth.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  private http = inject(HttpService);

  login(username: string, password: string) {
    return this.http.post<LoginResponseDto>('/auth/login', {
      username,
      password,
    });
  }

  getPermissions() {
    return this.http.get<PermissionResponseDto>('/auth/permissions');
  }
}
