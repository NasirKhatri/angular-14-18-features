import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSignalComponent } from './update-signal.component';

describe('UpdateSignalComponent', () => {
  let component: UpdateSignalComponent;
  let fixture: ComponentFixture<UpdateSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpdateSignalComponent]
    });
    fixture = TestBed.createComponent(UpdateSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
