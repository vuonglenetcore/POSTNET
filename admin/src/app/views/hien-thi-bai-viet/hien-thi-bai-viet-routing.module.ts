import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HienThiBaiVietComponent } from './hien-thi-bai-viet/hien-thi-bai-viet.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HienThiBaiVietComponent,
    data: {
      title: 'hien-thi-bai-viet'
    }  

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HienThiBaiVietRoutingModule { }
