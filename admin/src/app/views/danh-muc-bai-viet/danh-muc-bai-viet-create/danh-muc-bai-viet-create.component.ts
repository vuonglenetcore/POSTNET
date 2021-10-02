import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';
import { BaseService } from '../../../services/base.service';
import { DanhMucBaiVetService } from '../danh-muc-bai-viet.service';

@Component({
  selector: 'app-danh-muc-bai-viet-create',
  templateUrl: './danh-muc-bai-viet-create.component.html',
  styleUrls: ['./danh-muc-bai-viet-create.component.scss']
})
export class DanhMucBaiVietCreateComponent implements OnInit {
  public id: any = 1;
  danhMucBaiViet: any = {};
  danhMucCha: any = [];
  constructor(private danhMucBaiVietService: DanhMucBaiVetService, private apiService: ApiService,
    private router: Router, private baseService: BaseService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getDanhMucCha();
    //this.danhMucBaiViet.Alias = "bing-ding theo tên danh mục"
    this.danhMucBaiViet.DanhMucChaId = 0;
    this.danhMucBaiViet.HienThiMenu = true;
  }

  getDanhMucCha() {
    this.apiService.get(`DanhMucBaiViet/getDanhMucCha`).toPromise().then((data) => {
      this.danhMucCha = data;
    })
  }
  chonDanhMucCha(event) {
    this.danhMucBaiViet.DanhMucChaId = event;
  }
  save() {
    // if(!this.danhMucBaiViet.Ten || !this.danhMucBaiViet.DanhMucChaId){
    //   return;
    // }
    // console.log('post',this.danhMucBaiViet)
    // this.danhMucBaiVietService.create(this.danhMucBaiViet).toPromise().

    // let danhMucBaiVietFromData = new FormData();
    // danhMucBaiVietFromData.append('Ten', this.danhMucBaiViet.Ten)
    // danhMucBaiVietFromData.append('Alias', this.danhMucBaiViet.Alias)
    // danhMucBaiVietFromData.append('HienThiMenu', this.danhMucBaiViet.HienThiMenu)
    // danhMucBaiVietFromData.append('ThuTuHienThi', this.danhMucBaiViet.ThuTuHienThi)
    // danhMucBaiVietFromData.append('Logo', this.danhMucBaiViet.Logo)
    // danhMucBaiVietFromData.append('DanhMucChaId', this.danhMucBaiViet.DanhMucChaId)
    

    this.baseService.create(this.danhMucBaiViet).toPromise().then((data: any) => {
      this.toastr.success('Thêm thành công !');
      this.router.navigate([`/danh-muc-bai-viet`]);
    }, (error) => {
      console.log(error)
    });
  }

  nhapTenDanhMucBaiViet() {
    this.danhMucBaiViet.Alias = this.utf8ConvertJavascript(this.danhMucBaiViet.TenDanhMuc);
  }

  utf8ConvertJavascript(obj) {
    var str = obj;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
    str = str.replace(/^\-+|\-+$/g, "");

    return str;
  }
}
