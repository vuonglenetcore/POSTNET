import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiVietComponent } from './bai-viet.component';

describe('BaiVietComponent', () => {
  let component: BaiVietComponent;
  let fixture: ComponentFixture<BaiVietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiVietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiVietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
