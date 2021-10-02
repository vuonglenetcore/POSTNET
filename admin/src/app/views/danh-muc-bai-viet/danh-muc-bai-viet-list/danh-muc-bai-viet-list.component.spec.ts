import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucBaiVietListComponent } from './danh-muc-bai-viet-list.component';

describe('DanhMucBaiVietListComponent', () => {
  let component: DanhMucBaiVietListComponent;
  let fixture: ComponentFixture<DanhMucBaiVietListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucBaiVietListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucBaiVietListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
