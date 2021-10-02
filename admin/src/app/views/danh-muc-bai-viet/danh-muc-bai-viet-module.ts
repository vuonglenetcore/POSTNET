import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DanhMucBaiVietRoutingModule } from './danh-muc-bai-viet-module.routing';
import { DanhMucBaiVietListComponent } from './danh-muc-bai-viet-list/danh-muc-bai-viet-list.component';
import { DanhMucBaiVetService } from './danh-muc-bai-viet.service';
import { BaseService } from '../../services/base.service';
import { GridComponent } from '../../shared/grid/grid.component';
import { ShareModuleModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    DanhMucBaiVietRoutingModule,
    ShareModuleModule
  ],
  declarations: [ DanhMucBaiVietListComponent ],
  providers:[DanhMucBaiVetService,
    { provide: BaseService, useClass: DanhMucBaiVetService },
  ]
    
})
export class DanhMucBaiVietModule { }
