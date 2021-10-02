import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HienThiDanhMucComponent } from './hien-thi-danh-muc/hien-thi-danh-muc.component';
import { HienThiDanhMucRoutingModule } from './hien-thi-danh-muc-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModuleModule } from '../../shared/shared.module';
import { HienThiDanhMucService } from './hien-thi-danh-muc.service';
import { BaseService } from '../../services/base.service';

@NgModule({
  declarations: [HienThiDanhMucComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    HienThiDanhMucRoutingModule,
    ShareModuleModule,
  ],
  providers:[HienThiDanhMucService,
    { provide: BaseService, useClass: HienThiDanhMucService }
  ],
})
export class HienThiDanhMucModule { }