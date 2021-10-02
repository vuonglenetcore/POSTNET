import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tongSoBaiViet: number = 0;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTongSoBaiViet();
  }
  

  getTongSoBaiViet() {
    this.apiService.get(`TrangChu/GetTongSoBaiVIet`).toPromise().then((data: any) => {
      this.tongSoBaiViet = data;
    }, (error) => {
      console.log(error)
    });
  }

}
