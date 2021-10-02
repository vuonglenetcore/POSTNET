import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleModule } from '../../shared/shared.module';
import { BaiVietRoutingModule } from './bai-viet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseService } from '../../services/base.service';
import { BaiVietListComponent } from './bai-viet-list/bai-viet-list.component';
import { BaiVietService } from './bai-viet.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    BaiVietRoutingModule,
    ShareModuleModule
  ],
  declarations: [ BaiVietListComponent ],
  providers:[BaiVietService,
    { provide: BaseService, useClass: BaiVietService },
  ]
})
export class BaiVietModule { }
