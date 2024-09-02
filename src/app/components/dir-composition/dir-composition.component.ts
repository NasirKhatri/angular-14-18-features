import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgColorDirective } from 'src/app/directives/bg-color.directive';

@Component({
  selector: 'app-dir-composition',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dir-composition.component.html',
  styleUrls: ['./dir-composition.component.scss'],
})
export class DirCompositionComponent {

}
