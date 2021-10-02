import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-hien-thi-danh-muc',
  templateUrl: './hien-thi-danh-muc.component.html',
  styleUrls: ['./hien-thi-danh-muc.component.scss']
})
export class HienThiDanhMucComponent implements OnInit {
  danhMucHienThis: any =[];
  danhMucKhongHienThis: any =[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDanhMucDangHienThi();
    this.getDanhMucKhongHienThi();
  }
  getDanhMucDangHienThi() {
    this.apiService.get(`DanhMucBaiViet/GetDanhMucHienThiMenu`).toPromise().then((data) => {
      this.danhMucHienThis = data;
    })
  }
  getDanhMucKhongHienThi() {
    this.apiService.get(`DanhMucBaiViet/GetDanhMucKhongHienThiMenu`).toPromise().then((data) => {
      this.danhMucKhongHienThis = data;
    })
  }
}

