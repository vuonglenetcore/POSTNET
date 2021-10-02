import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';
import { BaseService } from '../../../services/base.service';
import { DanhMucBaiVetService } from '../danh-muc-bai-viet.service';

@Component({
  selector: 'app-danh-muc-bai-viet-update',
  templateUrl: './danh-muc-bai-viet-update.component.html',
  styleUrls: ['./danh-muc-bai-viet-update.component.scss']
})
export class DanhMucBaiVietUpdateComponent implements OnInit {
  danhMucBaiViet: any ={};
  danhMucCha: any =[]
  constructor(private apiService: ApiService, private danhMucBaiVietService : DanhMucBaiVetService,
    private baseService : BaseService, private route : ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    //let id = this.route.snapshot.params['id'];
    this.getById(this.route.snapshot.params['id']);
    this.getDanhMucCha();
  }


  getById(id: number) {
    this.danhMucBaiVietService.getById(id).toPromise().then((data) => {
      this.danhMucBaiViet = data;
      console.log(this.danhMucBaiViet)
    }, (error) => {
      console.log(error)

    });
  }

  getDanhMucCha() {
    this.apiService.get(`DanhMucBaiViet/getDanhMucCha`).toPromise().then((data) => {
      console.log('222', data);
      this.danhMucCha = data;
    })
  }
  chonDanhMucCha(event){
    this.danhMucBaiViet.DanhMucChaId = event;
  }
  nhapTenDanhMuc() {
    this.danhMucBaiViet.Alias = this.utf8ConvertJavascript(this.danhMucBaiViet.TenDanhMuc);
  }
  save() {    
    if(!this.danhMucBaiViet.TenDanhMuc){
      return;
    }
    // console.log('post',this.danhMucBaiViet)
    // this.danhMucBaiVietService.create(this.danhMucBaiViet).toPromise().

    // let danhMucBaiVietFromData = new FormData();
    // danhMucBaiVietFromData.append('Id', this.danhMucBaiViet.Id)
    // danhMucBaiVietFromData.append('TenDanhMuc', this.danhMucBaiViet.TenDanhMuc)
    // danhMucBaiVietFromData.append('Alias', this.danhMucBaiViet.Alias)
    // danhMucBaiVietFromData.append('Logo', this.danhMucBaiViet.Logo)
    // danhMucBaiVietFromData.append('DanhMucChaId', this.danhMucBaiViet.DanhMucChaId)


    this.baseService.update(this.danhMucBaiViet).toPromise().then((data: any) => {
      console.log('z1zz', data)      
      this.toastr.success('Sửa thành công !');
      this.router.navigate([`/danh-muc-bai-viet`]);
    }, (error) => {
      console.log(error)
    });
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
