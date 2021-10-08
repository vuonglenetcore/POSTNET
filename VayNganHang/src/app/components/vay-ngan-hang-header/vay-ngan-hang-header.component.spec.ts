import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VayNganHangHeaderComponent } from './vay-ngan-hang-header.component';

describe('VayNganHangHeaderComponent', () => {
  let component: VayNganHangHeaderComponent;
  let fixture: ComponentFixture<VayNganHangHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VayNganHangHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VayNganHangHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
