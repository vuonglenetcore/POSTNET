import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from '../../../services/api.service';
export interface User {
  name: string;
  id: number
}
export interface BaiViet {
  Id: number;
  Ten: string
}
@Component({
  selector: 'app-them-bai-viet-popup',
  templateUrl: './them-bai-viet-popup.component.html',
  styleUrls: ['./them-bai-viet-popup.component.scss']
})
export class ThemBaiVietPopupComponent implements OnInit {
  myControl = new FormControl();
  listBaiViet: any = [];
  danhMucName: string = "Trang chủ";
  danhMucId: number = 0;
  baiVietId: number;
  options: any = [
    { name: 'Mary', id: 1 },
    { name: 'Shelley', id: 2 },
    { name: 'Igor', id: 3 }
  ];
  filteredOptions: Observable<any[]>;
  filteredBaiViets: Observable<any[]>;

  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data, private matDialog: MatDialog,
  private toastr : ToastrService) { }

  ngOnInit() {
    this.danhMucId = this.data.danhMucId;
    this.danhMucName = this.data.danhMucName;
    this.GetThemBaiVietChoTrang(this.data.danhMucId);
  }

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  displayFnBaiViet(baiviet: BaiViet): string {
    return baiviet && baiviet.Ten ? baiviet.Ten : '';
  }

  private _filter(Ten: string): any[] {
    const filterValue = Ten.toLowerCase();

    return this.listBaiViet.filter(baiViet => baiViet.Ten.toLowerCase().indexOf(filterValue) === 0);
  }

  GetThemBaiVietChoTrang(danhMucId) {
    this.apiService.get(`CauHinhHienThiBaiViet/GetThemBaiVietChoTrang/${danhMucId}`).toPromise().then((data) => {
      this.listBaiViet = data;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
      this.filteredBaiViets = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.Ten),
          map(Ten => Ten ? this._filter(Ten) : this.listBaiViet.slice())
        );
    })
  }

  onSelectionChange(event) {
    this.baiVietId = Number(event.option.id);
    return this.baiVietId;
  }
  themVaoTrang() {
    let baiViet: any = {
      BaiVietId: this.baiVietId,
      DanhMucId: this.danhMucId,
      VitriId: this.data.viTriId
    }
    this.apiService.post(`CauHinhHienThiBaiViet/ThemCauHinhBaiViet`, baiViet).toPromise().then((data: any) => {
      if (data) {
        this.toastr.success('Thêm thành công!');
        this.matDialog.closeAll();
      }
    }, (error) => {
      console.log(error)
    });
  }
}
