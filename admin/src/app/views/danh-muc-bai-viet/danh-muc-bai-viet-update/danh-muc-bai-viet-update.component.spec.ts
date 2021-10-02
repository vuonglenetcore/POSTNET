import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucBaiVietUpdateComponent } from './danh-muc-bai-viet-update.component';

describe('DanhMucBaiVietUpdateComponent', () => {
  let component: DanhMucBaiVietUpdateComponent;
  let fixture: ComponentFixture<DanhMucBaiVietUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucBaiVietUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucBaiVietUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
