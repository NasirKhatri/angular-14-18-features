import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-access.component.html',
  styleUrls: ['./input-access.component.scss'],
})
export class InputAccessComponent {
  @Input('id') id? : string;
  @Input('page') page? : string;
  @Input('sort') sort? : string;
  @Input('color') color? : string;

}
