import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-withoutsignal',
  templateUrl: './withoutsignal.component.html',
  styleUrls: ['./withoutsignal.component.scss'],
  standalone:true,
  imports: [CommonModule]
})
export class WithoutsignalComponent {
  fname = "Nasir";
  lname = "Khatri";
  fullName = this.fname + " " + this.lname;

  changefname(v: string) {
    this.fname = v;
  }

  changelname(v: string) {
    this.lname = v;
  }
}