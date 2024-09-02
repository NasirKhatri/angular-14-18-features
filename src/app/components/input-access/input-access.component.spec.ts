import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAccessComponent } from './input-access.component';

describe('InputAccessComponent', () => {
  let component: InputAccessComponent;
  let fixture: ComponentFixture<InputAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputAccessComponent]
    });
    fixture = TestBed.createComponent(InputAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
