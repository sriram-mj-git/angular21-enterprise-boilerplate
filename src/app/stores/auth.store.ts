import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthRepository } from '../features/auth/services/auth.repository';
import { TokenStorageService } from '../core/services/token-storage.service';
import { User } from '../api-contract/models/user.model';
import { mapPermissionDtoToUser } from '../api-contract/mappers/auth.mapper';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private repo = inject(AuthRepository);
  private tokenStorage = inject(TokenStorageService);

  // -------- State --------

  private userSignal = signal<User | null>(null);
  private loadingSignal = signal(false);

  // -------- Public Signals --------

  user = this.userSignal.asReadonly();
  loading = this.loadingSignal.asReadonly();

  isAuthenticated = computed(() => !!this.tokenStorage.getAccessToken());

  // -------- Actions --------

  login(username: string, password: string) {
    this.repo.login(username, password).subscribe({
      next: (loginRes) => {
        this.tokenStorage.setAccessToken(loginRes.accessToken);
        this.tokenStorage.setRefreshToken(loginRes.refreshToken);

        this.repo.getPermissions().subscribe((permissionDto) => {
          const user = mapPermissionDtoToUser(loginRes.userId, permissionDto);

          this.userSignal.set(user);
        });
      },
    });
  }

  logout() {
    this.tokenStorage.clearAll();
    this.userSignal.set(null);
  }
}
