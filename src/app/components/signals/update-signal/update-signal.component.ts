import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { SignalService } from 'src/app/services/signal.service';

@Component({
  selector: 'app-update-signal',
  templateUrl: './update-signal.component.html',
  styleUrls: ['./update-signal.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class UpdateSignalComponent {

  constructor(
    private _ss: SignalService
  ) {
    effect(() => console.log(`effect called from update signal ${this.qty()}`))
  }

  qty = this._ss.qty;

  incqty() {
    this.qty.update(q => q + 1)
  }

  decqty() {
    this.qty.update(q => q - 1)
  }
}