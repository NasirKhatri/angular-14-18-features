import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const as = inject(AuthService);
  const router = inject(Router);
  if (as.loginStatus()) {
    return true;
  } else {
    alert("You are not logged in");
    router.navigate(['login']);
    return false;
  }
};
