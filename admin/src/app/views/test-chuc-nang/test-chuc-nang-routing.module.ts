import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestChucNangComponent } from './test-chuc-nang.component';

const routes: Routes = [
  {
    path: '',
    component: TestChucNangComponent,
    data: {
      title: 'test-chuc-nang'
    }  

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestChucNangRoutingModule { }
