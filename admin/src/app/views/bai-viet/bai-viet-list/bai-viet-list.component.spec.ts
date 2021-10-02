import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiVietListComponent } from './bai-viet-list.component';

describe('BaiVietListComponent', () => {
  let component: BaiVietListComponent;
  let fixture: ComponentFixture<BaiVietListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiVietListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiVietListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
