import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutsignalComponent } from './withoutsignal.component';

describe('WithoutsignalComponent', () => {
  let component: WithoutsignalComponent;
  let fixture: ComponentFixture<WithoutsignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WithoutsignalComponent]
    });
    fixture = TestBed.createComponent(WithoutsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
