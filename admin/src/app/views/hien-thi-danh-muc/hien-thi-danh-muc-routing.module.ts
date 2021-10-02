import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HienThiDanhMucComponent } from './hien-thi-danh-muc/hien-thi-danh-muc.component';

const routes: Routes = [
  {
    path: '',
    component: HienThiDanhMucComponent,
    data: {
      title: 'hien-thi-danh-muc'
    }  

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HienThiDanhMucRoutingModule { }