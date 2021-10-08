import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bai-viet',
  templateUrl: './bai-viet.component.html',
  styleUrls: ['./bai-viet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BaiVietComponent implements OnInit {
  baiViet: any = {};
  diemTanBao: any = 50;
  diemNguyHiem: any = 50;
  diemBeNgoai: any = 50;
  listBaiVietTrangChu: unknown;
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let baiVietId = this.route.snapshot.params['id'];
    this.getBaiVietDetail(baiVietId);
    this.getListBaiViet(0);
  }

  getBaiVietDetail(baiVietId) {
    this.apiService.get(`BaiVietPortal/GetBaiVietDetail/${baiVietId}`).toPromise().then((data) => {
      this.baiViet = data;
    })
  }
  async getListBaiViet(danhMucId) {
    await this.apiService.get(`DanhMucPortal/GetBaiListBaiViet/${danhMucId}`).toPromise().then((data) => {
      this.listBaiVietTrangChu = data;
      console.log('xxa',this.listBaiVietTrangChu)
    })
  }

  rangeDiemTanBao(e) {
    this.diemTanBao = e;
  }

  rangeDiemNguyHiem(e) {
    this.diemNguyHiem = e;
  }

  rangeDiemBeNgoai(e) {
    this.diemBeNgoai = e;
  }

  tangLike(baiVietId) {
    alert(baiVietId)
    this.apiService.post(`BaiVietPortal/TangLike`, baiVietId).toPromise().then((data) => {
      this.baiViet = data;
    })
  }

  tangBuon(baiVietId) {
    this.apiService.post(`BaiVietPortal/TangLike`, baiVietId).toPromise().then((data) => {
      this.baiViet = data;
    })
  }

  tangGian(baiVietId) {
    this.apiService.post(`BaiVietPortal/TangLike`, baiVietId).toPromise().then((data) => {
      this.baiViet = data;
    })
  }

  tangCuoi(baiVietId) {
    
    this.apiService.post(`BaiVietPortal/TangLike`, baiVietId).toPromise().then((data) => {
      this.baiViet = data;
    })
  }
}


