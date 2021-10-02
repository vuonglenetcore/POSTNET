import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BaseService } from '../../services/base.service';
@Injectable()
export class DanhMucBaiVetService extends BaseService {
    controllerName = 'DanhMucBaiViet'
    constructor(apiService: ApiService) {
        super(apiService);
       
    }

    getDanhMucCha(){
       
    }

}
