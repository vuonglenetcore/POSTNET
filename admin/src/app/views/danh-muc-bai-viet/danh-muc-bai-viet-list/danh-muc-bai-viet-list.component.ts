import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DanhMucBaiVetService } from '../danh-muc-bai-viet.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-danh-muc-bai-viet-list',
  templateUrl: './danh-muc-bai-viet-list.component.html',
  styleUrls: ['./danh-muc-bai-viet-list.component.scss']
})
export class DanhMucBaiVietListComponent implements OnInit {
danhMucBaiViets : any =[];
  constructor(private toastr: ToastrService,private DanhMucBaiVietService: DanhMucBaiVetService, private router : Router) { }

  ngOnInit(): void {  
    this.getAllDanhMuc();
  }

  getAllDanhMuc(){
    this.DanhMucBaiVietService.getAll().toPromise().then((data: any)=>{
      this.danhMucBaiViets = data.Data;
    }, (error) => {
      console.log(error)
    });
  }

  themDanhMuc(){
    //this.router.navigate(['/heroes', { id: heroId }]);
    this.router.navigate(['danh-muc-bai-viet/them']);
  }
  delete(danhMucId, tenDanhMuc){
    // alert('chắc chắn xóa');
    this.DanhMucBaiVietService.deleteById(danhMucId).toPromise().then((data:any)=>{
      this.getAllDanhMuc();
      this.toastr.success('Đã xóa!','Danh mục: ' + tenDanhMuc);
    },(err)=>{
      console.log(err)
    })
  }

}
