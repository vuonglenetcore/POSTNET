import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaiVietListComponent } from './bai-viet-list/bai-viet-list.component';
import { BaiVietCreateComponent } from './bai-viet-create/bai-viet-create.component';
import { BaiVietUpdateComponent } from './bai-viet-update/bai-viet-update.component';

const routes: Routes = [
  {
    path: '',
    component: BaiVietListComponent,
    data: {
      title: 'Bài viết'
    }  

  },
  {
    path:'them',
    component: BaiVietCreateComponent,
    data: {
      title: 'Thêm bài viết'
    },
    
  },
  {
    path:'chinh-sua/:id',
    component: BaiVietUpdateComponent,
    data: {
      title: 'Chỉnh sửa bài viết'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaiVietRoutingModule { }
