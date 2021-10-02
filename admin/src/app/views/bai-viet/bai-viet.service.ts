import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BaseService } from '../../services/base.service';

@Injectable()
export class BaiVietService extends BaseService{

  controllerName = 'BaiViet'
    constructor(apiService: ApiService) {
        super(apiService);
       
    }

}
