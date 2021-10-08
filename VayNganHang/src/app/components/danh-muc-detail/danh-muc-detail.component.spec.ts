import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucDetailComponent } from './danh-muc-detail.component';

describe('DanhMucDetailComponent', () => {
  let component: DanhMucDetailComponent;
  let fixture: ComponentFixture<DanhMucDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
