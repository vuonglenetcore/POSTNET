import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiVietCreateComponent } from './bai-viet-create.component';

describe('BaiVietCreateComponent', () => {
  let component: BaiVietCreateComponent;
  let fixture: ComponentFixture<BaiVietCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiVietCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiVietCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
