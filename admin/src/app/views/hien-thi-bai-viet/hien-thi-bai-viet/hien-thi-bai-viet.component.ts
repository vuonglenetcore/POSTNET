import { Component, OnInit, ViewChild } from '@angular/core';
import { TabStripComponent } from '@progress/kendo-angular-layout';
import { cameraIcon } from "@progress/kendo-svg-icons";
import { ApiService } from '../../../services/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ThemBaiVietPopupComponent } from '../them-bai-viet-popup/them-bai-viet-popup.component';
import { ToastrService } from 'ngx-toastr';
//import { ThemBaiVietPopupComponent } from '../them-bai-viet-popup/them-bai-viet-popup.component';
@Component({
  selector: 'app-hien-thi-bai-viet',
  templateUrl: './hien-thi-bai-viet.component.html',
  styleUrls: ['./hien-thi-bai-viet.component.scss']
})
export class HienThiBaiVietComponent implements OnInit {
  @ViewChild('tabstrip') public tabstrip: TabStripComponent;
  icons = { cameraIcon };
  danhMucMenu: any = [];
  baiVietKhu1: any = [];
  baiVietKhu2: any = [];
  baiVietKhu3: any = [];
  baiVietKhu4: any = [];
  danhMucId = 0;

  public toggleText = "Hide";
  private show = true;
  constructor(
    private matDialog: MatDialog,
    private apiService: ApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getListDanhMucHienThiMenu();
    this.getData(this.danhMucId);
  }

  public ngAfterViewInit() {
    //Promise.resolve(null).then(() => this.tabstrip.selectTab(2));
  }

  getListDanhMucHienThiMenu() {
    this.apiService.get(`DanhMucBaiViet/GetDanhMucHienThiMenu`).toPromise().then((data) => {
      this.danhMucMenu = data;
    })
  }
  getData(danhMucId) {
    this.danhMucId = danhMucId;
    this.getBaiVietKhuVuc(danhMucId);
  }

  getBaiVietKhuVuc(danhMucId) {
    this.apiService.get(`BaiViet/GetBaiVietHienThi/${danhMucId}`).toPromise().then((data: any) => {
      if (data) {
        this.baiVietKhu1 = data.filter(x => x.ViTri == 1);
        this.baiVietKhu2 = data.filter(x => x.ViTri == 2);
        this.baiVietKhu3 = data.filter(x => x.ViTri == 3);
        this.baiVietKhu4 = data.filter(x => x.ViTri == 4);
      }
      console.log(this.baiVietKhu1)
    })
  }
  // getBaiVietKhuVuc2(danhMucId) {
  //   this.apiService.get(`BaiViet/GetBaiVietHienThi/${danhMucId}/${2}`).toPromise().then((data) => {
  //     this.baiVietKhu2 = data;
  //   })
  // }
  // getBaiVietKhuVuc3(danhMucId) {
  //   this.apiService.get(`BaiViet/GetBaiVietHienThi/${danhMucId}/${3}`).toPromise().then((data) => {
  //     this.baiVietKhu3 = data;
  //   })
  // }
  // getBaiVietKhuVuc4(danhMucId) {
  //   this.apiService.get(`BaiViet/GetBaiVietHienThi/${danhMucId}/${4}`).toPromise().then((data) => {
  //     this.baiVietKhu4 = data;
  //   })
  // }


  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hidе" : "Show";
  }

  themBaiVietPopup(viTriId) {
    let danhMucName = "Trang chủ";
    if (this.danhMucId > 0) {
      danhMucName = this.danhMucMenu.filter(x => x.DanhMucId == this.danhMucId)[0].TenDanhMuc;
    }
    this.matDialog.open(ThemBaiVietPopupComponent, {
      disableClose: false,
      width: "800px",
      data: {
        Title: "Xác nhận",
        danhMucId: this.danhMucId,
        danhMucName: danhMucName,
        viTriId: viTriId,
        Message: "view-order",
      },
    })
      .afterClosed(

      )
      .subscribe((result) => {
        this.getData(this.danhMucId);
        if (result == "Yes") {

        }
      });
  }
  delete(baiVietId) {
    this.apiService.delete(`CauHinhHienThiBaiViet/Delete/${this.danhMucId}/${baiVietId}`).toPromise().then((data) => {
      if(data){
        this.toastr.success('Xóa khỏi danh sách thành công!');
        this.getData(this.danhMucId);
      }
    })
  }
}
