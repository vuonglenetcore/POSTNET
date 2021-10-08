import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vay-ngan-hang-footer',
  templateUrl: './vay-ngan-hang-footer.component.html',
  styleUrls: ['./vay-ngan-hang-footer.component.css']
})
export class VayNganHangFooterComponent implements OnInit {
  danhMucMeNus: any =[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDanhMucMenu();
  }
  getDanhMucMenu() {
    this.apiService.get(`DanhMucPortal/GetDanhMucHienThiMenu`).toPromise().then((data) => {
      this.danhMucMeNus = data;
    })
  }
}
