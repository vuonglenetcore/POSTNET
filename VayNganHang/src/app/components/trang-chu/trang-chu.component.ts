import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit {
  baiVietKV1: any = [];
  baiVietKV2: any = [];
  baiVietKV3: any = [];

  listBaiVietTrangChu: any =[];
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let danhMucId = 0;
    this.getBaiVIetKV1(danhMucId);
    this.getBaiVIetKV2(danhMucId);
    this.getBaiVIetKV3(danhMucId);
    this.getListBaiViet(danhMucId);
    

    //localStorage.setItem('vuong','vuongle');
    //localStorage.removeItem('vuong');
    this.isUserAuthenticated();
  }

  isUserAuthenticated(){
    //const tocken: string = localStorage.getItem("jwt");

    this.apiService.get(`DocGia/GetTest`).subscribe(res=>{
      console.log(res);
    },err =>{
      console.log(1);
    })

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

  async getListBaiViet(danhMucId) {
    await this.apiService.get(`DanhMucPortal/GetBaiListBaiViet/${danhMucId}`).toPromise().then((data) => {
      this.listBaiVietTrangChu = data;
      console.log('xxa',this.listBaiVietTrangChu)
    })
  }
  
  xemChiTiet(baiVIetId) {
    this.router.navigate([`bai-viet/${baiVIetId}`]);
  }
}
