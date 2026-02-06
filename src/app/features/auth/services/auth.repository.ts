import { inject, Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';

import { HttpService } from '../../../core/services/http.service';
import { LoginResponseDto, PermissionResponseDto } from '../../../api-contract/dtos/auth.dto';
import { mapPermissionDtoToUser } from '../../../api-contract/mappers/auth.mapper';
import { User } from '../../../api-contract/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  private http = inject(HttpService);

  login(
    username: string,
    password: string,
  ): Observable<{
    accessToken: string;
    refreshToken: string;
    user: User;
  }> {
    return this.http
      .post<LoginResponseDto>('/auth/login', {
        username,
        password,
      })
      .pipe(
        switchMap((loginRes) =>
          this.http.get<PermissionResponseDto>('/auth/permissions').pipe(
            map((permissionDto) => ({
              accessToken: loginRes.accessToken,
              refreshToken: loginRes.refreshToken,
              user: mapPermissionDtoToUser(loginRes.userId, permissionDto),
            })),
          ),
        ),
      );
  }
}
