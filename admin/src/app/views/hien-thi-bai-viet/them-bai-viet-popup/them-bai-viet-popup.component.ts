import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  listBaiVIet: any = [];
  danhMucName: string = "Trang chủ";
  danhMucId: number = 0;
  viTriId: number;
  baiVietId: number;
  options: any = [
    { name: 'Mary', id: 1 },
    { name: 'Shelley', id: 2 },
    { name: 'Igor', id: 3 }
  ];
  filteredOptions: Observable<any[]>;
  filteredBaiVIets: Observable<any[]>;

  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data, private matDialog: MatDialog) { }

  ngOnInit() {
    this.danhMucId = this.data.danhMucId;
    this.danhMucName = this.data.danhMucName;
    this.viTriId = this.data.viTriId;
    this.GetThemBaiVietChoTrang(this.danhMucId, this.viTriId);
  }

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  displayFnBaiViet(baiviet: BaiViet): string {
    return baiviet && baiviet.Ten ? baiviet.Ten : '';
  }

  private _filter(Ten: string): any[] {
    const filterValue = Ten.toLowerCase();

    return this.listBaiVIet.filter(baiViet => baiViet.Ten.toLowerCase().indexOf(filterValue) === 0);
  }

  GetThemBaiVietChoTrang(danhMucId, viTriId) {
    this.apiService.get(`CauHinhHienThiBaiViet/GetThemBaiVietChoTrang/${danhMucId}/${viTriId}`).toPromise().then((data) => {
      this.listBaiVIet = data;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
      this.filteredBaiVIets = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.Ten),
          map(Ten => Ten ? this._filter(Ten) : this.listBaiVIet.slice())
        );
      console.log(this.listBaiVIet);
      console.log(this.filteredOptions);
    })
  }

  onSelectionChange(event) {
    this.baiVietId = Number(event.option.id);
    return this.baiVietId;
  }
  themVaoTrang() {
    let request: any = {
      BaiVietId: this.baiVietId,
      DanhMucId: this.danhMucId,
      ViTriId: this.viTriId,
    }
    this.apiService.post(`CauHinhHienThiBaiViet/ThemCauHinhBaiViet`, request).toPromise().then((data: any) => {
      this.matDialog.closeAll();
    }, (error) => {
      console.log(error)
    });
  }
}
