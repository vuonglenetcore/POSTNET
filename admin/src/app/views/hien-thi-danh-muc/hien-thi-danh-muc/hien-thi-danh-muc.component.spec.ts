import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiDanhMucComponent } from './hien-thi-danh-muc.component';

describe('HienThiDanhMucComponent', () => {
  let component: HienThiDanhMucComponent;
  let fixture: ComponentFixture<HienThiDanhMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HienThiDanhMucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
