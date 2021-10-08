import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaiVietComponent } from './components/bai-viet/bai-viet.component';
import { DanhMucDetailComponent } from './components/danh-muc-detail/danh-muc-detail.component';
import { TrangChuComponent } from './components/trang-chu/trang-chu.component';


const routes: Routes = [
  { path: '',    component: TrangChuComponent },
  { path: 'trang-chu', component: TrangChuComponent },
  { path: 'danh-muc/:id',component: DanhMucDetailComponent},
  { path: 'bai-viet/:id', component: BaiVietComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

