import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VayNganHangFooterComponent } from './vay-ngan-hang-footer.component';

describe('VayNganHangFooterComponent', () => {
  let component: VayNganHangFooterComponent;
  let fixture: ComponentFixture<VayNganHangFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VayNganHangFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VayNganHangFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
