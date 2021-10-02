import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BaseService } from '../../services/base.service';

@Injectable()
export class HienThiDanhMucService extends BaseService{
  controllerName = 'CauHinhHienThiBaiViet'
  constructor(apiService: ApiService) {
      super(apiService);     
  }
}