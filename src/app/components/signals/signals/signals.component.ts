import { Component, signal, computed, effect, Injector } from '@angular/core';
import { SignalService } from 'src/app/services/signal.service';
import { WithoutsignalComponent } from '../withoutsignal/withoutsignal.component';
import { UpdateSignalComponent } from '../update-signal/update-signal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  standalone: true,
  imports: [
    WithoutsignalComponent,
    UpdateSignalComponent,
    CommonModule
  ]
})
export class SignalsComponent {

  constructor(
    private _ss: SignalService,
    private injector: Injector
  ) {
    
  }
  qty = this._ss.qty;
  fname = signal("Nasir");
  lname = signal("Khatri");
  fullName = computed(() => this.fname() + " " + this.lname());

  changefname(v: string) {
    this.fname.set(v);
  }

  changelname(v: string) {
    this.lname.set(v);
    effect(() => { console.log(`effect called from parent signal ${this.qty()}`) }, { injector: this.injector})
  }
}
