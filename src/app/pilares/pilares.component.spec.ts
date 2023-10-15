import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilaresComponent } from './pilares.component';

describe('PilaresComponent', () => {
  let component: PilaresComponent;
  let fixture: ComponentFixture<PilaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilaresComponent]
    });
    fixture = TestBed.createComponent(PilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
