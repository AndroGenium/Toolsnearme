import { Injectable } from '@angular/core';
import { UserRole } from '../Interfaces/inter';
import { BehaviorSubject } from 'rxjs';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userTypeSubject = new BehaviorSubject<UserRole>(UserRole.Guest);
  userRole$ = this.userTypeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get userRole(): UserRole {
    return this.userTypeSubject.value;
  }

  setUserRole(type: UserRole) {
    this.userTypeSubject.next(type);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('userRole', UserRole[type]);
    }
  }

  loadUserRole() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('userRole');
      if (saved) {
        const role = (UserRole as any)[saved];
        if (role !== undefined) this.userTypeSubject.next(role);
      }
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('userType');
    }
    this.userTypeSubject.next(UserRole.Guest);
  }

  isGuest(): boolean {
    return this.userTypeSubject.value === UserRole.Guest;
  }
}
