import { NgModule } from "@angular/core";
import { GridComponent } from "./grid/grid.component";
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CommonModule } from "@angular/common";
import { RatingComponent } from "./grid/rating.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRippleModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
@NgModule({
    imports: [
        //GridComponent
        //BrowserModule,
        CommonModule,
        GridModule,
        ChartsModule,
        InputsModule,
        PDFModule,
        ExcelModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatAutocompleteModule
    ],
    declarations: [GridComponent, RatingComponent],
    exports: [GridComponent,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatAutocompleteModule]
})
export class ShareModuleModule { }
