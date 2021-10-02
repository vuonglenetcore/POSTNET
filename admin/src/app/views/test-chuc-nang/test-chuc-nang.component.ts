import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-test-chuc-nang',
  templateUrl: './test-chuc-nang.component.html',
  styleUrls: ['./test-chuc-nang.component.scss']
})
export class TestChucNangComponent implements OnInit {
  data: any = {};
  result:string ="";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  sendData() {
    this.data = {
      Id: 1,
      Name: 'test data format usr interceptor'
    }
    this.apiService.put(`TestChucNang/TestInTerCepTor2`, this.data).toPromise().then((resultData) => {
      if (resultData) {
        this.result = 'success';
      }else{
        this.result = 'error';
      }
    })
  }
}
