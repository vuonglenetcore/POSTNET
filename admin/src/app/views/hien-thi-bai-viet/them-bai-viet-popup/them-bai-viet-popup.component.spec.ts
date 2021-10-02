import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemBaiVietPopupComponent } from './them-bai-viet-popup.component';

describe('ThemBaiVietPopupComponent', () => {
  let component: ThemBaiVietPopupComponent;
  let fixture: ComponentFixture<ThemBaiVietPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemBaiVietPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemBaiVietPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
