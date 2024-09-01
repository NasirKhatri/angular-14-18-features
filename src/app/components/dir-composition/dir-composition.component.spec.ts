import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirCompositionComponent } from './dir-composition.component';

describe('DirCompositionComponent', () => {
  let component: DirCompositionComponent;
  let fixture: ComponentFixture<DirCompositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DirCompositionComponent]
    });
    fixture = TestBed.createComponent(DirCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
