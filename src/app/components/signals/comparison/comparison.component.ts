import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ComparisonComponent {
  subject_var = new BehaviorSubject<number>(0);
  signal_var = signal<number>(0);

  print() {
    console.log("Component re rendered")
  }

  emitSubject() {
    this.subject_var.next(1);
    this.subject_var.next(2);
    this.subject_var.next(3);
  }

  setSignal() {
    this.signal_var.set(1);
    this.signal_var.set(2);
    this.signal_var.set(3);
  }
}