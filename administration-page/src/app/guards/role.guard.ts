import { AuthService } from '../services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    console.log(this.authService.getUserRole());
    if (this.authService.getUserRole() == 2) {
      return true;
    }
    return false;
  }
}
