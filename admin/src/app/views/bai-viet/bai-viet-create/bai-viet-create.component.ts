import { Component, OnInit, Sanitizer } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import { ApiService } from '../../../services/api.service';
import { BaseService } from '../../../services/base.service';
import { race } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
@Component({

  selector: 'app-bai-viet-create',
  templateUrl: './bai-viet-create.component.html',
  styleUrls: ['./bai-viet-create.component.scss']
})
export class BaiVietCreateComponent implements OnInit {
  public Editor = ClassicEditor;

  baiViet: any = {};
  danhMuc: any = [];
  hienThiHinhAnh: any;
  // baiVietFromData = new FormData();

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private baseService: BaseService, private router: Router) { }
  ngOnInit(): void {

    this.baiViet.HienThi = true;
    // ClassicEditor
    //   .create(document.querySelector('#editor'))
    //   .then()
    //   .catch();
    this.getDanhMuc();
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }


  getDanhMuc() {
    this.apiService.get(`DanhMucBaiViet/geAlltDanhMuc`).toPromise().then((data) => {
      this.danhMuc = data;
    })
  }
  nhapTenBaiViet() {
    this.baiViet.Alias = this.utf8ConvertJavascript(this.baiViet.TenBaiViet);
  }
  chonDanhMuc(event) {
    this.baiViet.DanhMucId = Number(event);
  }

  save() {
    if (!this.baiViet.DanhMucId || !this.baiViet.TenBaiViet || !this.baiViet.NoiDung || !this.baiViet.NoiDungNgan || !this.hienThiHinhAnh) {
      this.toastr.error('Lỗi chưa nhập các trường!');
      return;
    }
    
    // this.baiVietFromData.append('Ten', this.baiViet.Ten);
    // this.baiVietFromData.append('Alias', this.baiViet.Alias);
    // this.baiVietFromData.append('NoiDungNgan', this.baiViet.NoiDungNgan);
    // this.baiVietFromData.append('NoiDungTomTat', this.baiViet.NoiDung);
    // this.baiVietFromData.append('NoiDung', this.baiViet.NoiDung);
    // this.baiVietFromData.append('DanhMucId', this.baiViet.DanhMucId);
    
    // this.baiVietFromData.append('HienThiTrangChu', this.baiViet.HienThiTrangChu);
    // this.baiVietFromData.append('ThuTuHienThi', this.baiViet.ThuTuHienThi);
    // this.baiVietFromData.append('HienThi', this.baiViet.HienThi);
console.log('baiviet', this.baiViet);
let testModel :any ={};
testModel.TenBaiViet = "avc";
    this.baseService.create(this.baiViet).toPromise().then((data: any) => {
      this.toastr.success('Thêm thành công !');
      this.router.navigate(['bai-viet']);
    }, (error) => {
      console.log(error)
    });

    // this.baseService.create(this.danhMucBaiViet).toPromise().then((data: any) => {
    //   this.toastr.success('Thêm thành công !');
    //   this.router.navigate([`/danh-muc-bai-viet`]);
    // }, (error) => {
    //   console.log(error)
    // });
  }
  url: string;
  onSelectFile(event) { // called each time file input changes

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();


      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // this.baiVietFromData.append('HinhAnhBase64', event.target.result.toString().split(',')[1]);
       this.baiViet.HinhAnhBase64 = event.target.result.toString().split(',')[1];
        this.hienThiHinhAnh =
          (this.sanitizer.bypassSecurityTrustResourceUrl(event.target.result.toString()) as any).changingThisBreaksApplicationSecurity;
      }
    }
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
