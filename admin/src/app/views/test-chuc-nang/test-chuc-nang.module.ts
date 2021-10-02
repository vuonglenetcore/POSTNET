
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModuleModule } from '../../shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TestChucNangComponent } from './test-chuc-nang.component';
import { TestChucNangRoutingModule } from './test-chuc-nang-routing.module';



@NgModule({
  declarations: [TestChucNangComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    TestChucNangRoutingModule,
    ShareModuleModule,
     LayoutModule,
  ],
})
export class TestChucNangModule { }