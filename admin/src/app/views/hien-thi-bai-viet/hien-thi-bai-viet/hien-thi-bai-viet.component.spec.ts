import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HienThiBaiVietComponent } from './hien-thi-bai-viet.component';

describe('HienThiBaiVietComponent', () => {
  let component: HienThiBaiVietComponent;
  let fixture: ComponentFixture<HienThiBaiVietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HienThiBaiVietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HienThiBaiVietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
