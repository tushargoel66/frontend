import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  console.log((inject(AuthService).getToken()))
  if(!inject(AuthService).isLoggedIn()){
    inject(Router).navigate(['/'])
    return false;
  }
  return true;
};
