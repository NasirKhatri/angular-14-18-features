import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BgColorDirective } from 'src/app/directives/bg-color.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BgColorDirective
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

}
