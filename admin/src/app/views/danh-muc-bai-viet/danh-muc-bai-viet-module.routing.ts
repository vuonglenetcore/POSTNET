import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhMucBaiVietCreateComponent } from './danh-muc-bai-viet-create/danh-muc-bai-viet-create.component';
import { DanhMucBaiVietListComponent } from './danh-muc-bai-viet-list/danh-muc-bai-viet-list.component';
import { DanhMucBaiVietUpdateComponent } from './danh-muc-bai-viet-update/danh-muc-bai-viet-update.component';


const routes: Routes = [
  {
    path: '',
    component: DanhMucBaiVietListComponent,
    data: {
      title: 'Danh mục bài viết'
    }  

  },
  {
    path:'them',
    component: DanhMucBaiVietCreateComponent,
    data: {
      title: 'Thêm danh mục bài viết'
    },
    
  },
  {
    path:'chinh-sua/:id',
    component: DanhMucBaiVietUpdateComponent,
    data: {
      title: 'Chỉnh sửa danh mục bài viết'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhMucBaiVietRoutingModule { }
