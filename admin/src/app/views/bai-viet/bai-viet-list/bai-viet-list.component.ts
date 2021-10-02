import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';
import { BaiVietService } from '../bai-viet.service';

@Component({
  selector: 'app-bai-viet-list',
  templateUrl: './bai-viet-list.component.html',
  styleUrls: ['./bai-viet-list.component.scss']
})
export class BaiVietListComponent implements OnInit {
  baiViets : any =[];
  danhMuc: any =[];
  constructor(private toastr: ToastrService,private baiVietService: BaiVietService, 
    private router : Router, private apiService: ApiService) { }
  
    ngOnInit(): void {  
      this.getAllBaiViet();
      this.getDanhMuc();
    }
  
    getAllBaiViet(){
      this.baiVietService.getAll().toPromise().then((data: any)=>{
        this.baiViets = data;
      }, (error) => {
        console.log(error)
      });
    }

    getDanhMuc() {
      this.apiService.get(`DanhMucBaiViet/geAlltDanhMuc`).toPromise().then((data) => {
        this.danhMuc = data;
      })
    }


    chonDanhMuc(danhMucId){
      if(danhMucId == 0){
        this.getAllBaiViet();
        return;
      }
      this.apiService.get(`BaiViet/getBaiVietTheoDanhMucId/${danhMucId}`).toPromise().then((data) => {
        this.baiViets = data;
      })
    }

    reload(){
      this.getAllBaiViet();
      this.toastr.success('test!', 'Toastr fun!');
    }
  
    themBaiViet(){
      this.router.navigate(['bai-viet/them']);
    }
    delete(baiVIetId){
      // alert('chắc chắn xóa');
      this.baiVietService.deleteById(baiVIetId).toPromise().then((data:any)=>{
        this.getAllBaiViet();
        this.toastr.success('Đã xóa!','Bài viết:' + baiVIetId);
      },(err)=>{
        console.log(err)
      })
    }
}
