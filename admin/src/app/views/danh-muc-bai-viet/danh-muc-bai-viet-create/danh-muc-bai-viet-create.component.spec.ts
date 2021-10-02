import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucBaiVietCreateComponent } from './danh-muc-bai-viet-create.component';

describe('DanhMucBaiVietCreateComponent', () => {
  let component: DanhMucBaiVietCreateComponent;
  let fixture: ComponentFixture<DanhMucBaiVietCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucBaiVietCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucBaiVietCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
