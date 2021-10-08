import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinMonthComponent } from './pin-month.component';

describe('PinMonthComponent', () => {
  let component: PinMonthComponent;
  let fixture: ComponentFixture<PinMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
