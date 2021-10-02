import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  controllerName = '';
  constructor(private apiService: ApiService
  ) { }

getAll<T>(): Observable<T>{
  return this.apiService.get(this.controllerName);
}

  create<T>(dto: any): Observable<T> {
    return this.apiService.post<T>(this.controllerName, dto);
  }
  update<T>(dto: any): Observable<T> {
    return this.apiService.put<T>(this.controllerName, dto);
  }
  getById(id: number) {
    return this.apiService.get(`${this.controllerName}/${id}`);
  }
  deleteById(id: number) {
    return this.apiService.delete(`${this.controllerName}/${id}`);
  }

  deleteByIds(ids: number[]) {
    return this.apiService.post(`${this.controllerName}/Deletes`, { Ids: ids });
  }

}
