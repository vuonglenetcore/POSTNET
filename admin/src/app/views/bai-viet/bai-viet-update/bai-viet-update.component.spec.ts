import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiVietUpdateComponent } from './bai-viet-update.component';

describe('BaiVietUpdateComponent', () => {
  let component: BaiVietUpdateComponent;
  let fixture: ComponentFixture<BaiVietUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiVietUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiVietUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
