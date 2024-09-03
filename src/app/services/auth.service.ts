import { Injectable, signal } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginStatus = signal(false);
  
  isLoggedIn(): boolean {
    if(this.loginStatus()) {
      return true;
    } else {
      alert("You are not logged in, Go to signals service and mark yourself login");
      return false;
    }
  }

  loginGuard: CanActivateFn = (route, state) => {
    console.log(route);
    console.log(state)
    return this.loginStatus();
  }
}
