import { inject, Injectable, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private router = inject(Router)
  loginStatus = signal(false);
  
  isLoggedIn(): boolean {
    if(this.loginStatus()) {
      return true;
    } else {
      alert("You are not logged in");
      this.router.navigate(['login']);
      return false;
    }
  }

  loginGuard: CanActivateFn = (route, state) => {
    console.log(route);
    console.log(state);
    if (this.loginStatus()) {
      return true;
    } else {
      alert("You are not logged in");
      this.router.navigate(['login']);
      return false;
    }
  }
}
