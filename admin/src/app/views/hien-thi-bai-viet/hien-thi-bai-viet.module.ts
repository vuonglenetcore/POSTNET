import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HienThiBaiVietComponent } from './hien-thi-bai-viet/hien-thi-bai-viet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HienThiBaiVietRoutingModule } from './hien-thi-bai-viet-routing.module';
import { ShareModuleModule } from '../../shared/shared.module';
import { HienThiBaiVietService } from './hien-thi-bai-viet.service';
import { BaseService } from '../../services/base.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ThemBaiVietPopupComponent } from './them-bai-viet-popup/them-bai-viet-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import {MatDialogModule} from "@angular/material/dialog";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LayoutModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [HienThiBaiVietComponent, ThemBaiVietPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    HienThiBaiVietRoutingModule,
    ShareModuleModule,
    // BrowserAnimationsModule, LayoutModule
    //BrowserAnimationsModule,
     LayoutModule,
    // InputsModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRippleModule,
    // MatAutocompleteModule
  ],
  providers:[HienThiBaiVietService,
    { provide: BaseService ,useClass: HienThiBaiVietService }
  ],
 // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HienThiBaiVietModule { }