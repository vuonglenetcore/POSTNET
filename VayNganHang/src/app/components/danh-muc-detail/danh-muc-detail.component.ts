import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-danh-muc-detail',
  templateUrl: './danh-muc-detail.component.html',
  styleUrls: ['./danh-muc-detail.component.css']
})
export class DanhMucDetailComponent implements OnInit {
  baiVietKV1: any = [];
  baiVietKV2: any = [];
  baiVietKV3: any = [];
  listBaiVietDanhMuc: any = [];
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let danhMucId = this.route.snapshot.params['id'];
    this.getBaiVIetKV1(danhMucId);
    this.getBaiVIetKV2(danhMucId);
    this.getBaiVIetKV3(danhMucId);
    this.getListBaiVietDanhMuc(danhMucId);
  }

  async getBaiVIetKV1(danhMucId) {
    await this.apiService.get(`DanhMucPortal/GetBaiVIetKV1/${danhMucId}`).toPromise().then((data) => {
      this.baiVietKV1 = data;
    })
  }
  async getBaiVIetKV2(danhMucId) {
    await this.apiService.get(`DanhMucPortal/GetBaiVIetKV2/${danhMucId}`).toPromise().then((data) => {
      this.baiVietKV2 = data;
      console.log('x', this.baiVietKV2);
    })
  }
  async getBaiVIetKV3(danhMucId) {
    await this.apiService.get(`DanhMucPortal/GetBaiVIetKV3/${danhMucId}`).toPromise().then((data) => {
      this.baiVietKV3 = data;
    })
  }
  async getListBaiVietDanhMuc(danhMucId) {
    await this.apiService.get(`DanhMucPortal/GetBaiListBaiViet/${danhMucId}`).toPromise().then((data) => {
      this.listBaiVietDanhMuc = data;
    })
  }
  xemChiTiet(baiVIetId) {
    this.router.navigate([`bai-viet/${baiVIetId}`]);
  }
}
