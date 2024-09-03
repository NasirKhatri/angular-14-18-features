import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BgColorDirective } from 'src/app/directives/bg-color.directive';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BgColorDirective,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  hostDirectives: [
    {
      directive: BgColorDirective,
      inputs: [ 'color' ]
    }
  ]

})
export class NavbarComponent {
  private router = inject(Router);
  public as = inject(AuthService);

  loginStatus = this.as.loginStatus;

  logout() {
    this.as.loginStatus.set(false);
    this.router.navigate(['login']);
  }
}
