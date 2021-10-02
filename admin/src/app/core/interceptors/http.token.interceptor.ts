// import { NotificationComponent } from 'src/app/shared/component/dialogs/notification/notification.component';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable,EMPTY } from 'rxjs';
// import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  dialogWarning:any=null;
  constructor(private dialog: MatDialog,private router: Router) { 
    this.dialogWarning=null;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req.url)
    //console.log("req.url = ", req.url.indexOf("amazonaws.com"))
    //console.log("req.url = ", req.url)
    //if (req.url.indexOf("amazonaws.com") > -1) {
    if (req.url.indexOf("amazonaws.com") > -1) {

      //   //req.url: structure JSON [{name, url}];
      let urls = JSON.parse(req.url);
      let url: string = "";
      let data: any = null;
      let contentType = undefined;
      if (req.body) {
        req.body.forEach(file => {
          //console.log("------: ",file, req.url)
          data = file;
          contentType = file.type;
          url = urls.filter(o => o.name == file.name)[0].url;
        });
      }
      const headers = new HttpHeaders({
        'content-type': contentType,
      })
      const request = new HttpRequest('PUT', url, data, { headers: headers, reportProgress: true });
      return next.handle(request);
    }
    else {

      const headersConfig = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };      

      // var timezoneLocation = new Date().toString().replace(/^.*GMT.*\(/, "").replace(/\)$/, "");
      // var timezoneMoment = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // headersConfig['TimeZone']="{Location:"+timezoneLocation+",Moment:"+timezoneMoment+"}";
    //   const accessToken = this.authService.getToken();

    //   if (accessToken) {
    //     headersConfig['Authorization'] = `Bearer ${accessToken.Token}`;
    //   }

      //
      //headersConfig['PhongBenhVienId'] = this.authService.getPhongLamViecId() + "";
      //
      const request = req.clone({ setHeaders: headersConfig });
      return next.handle(request);
    }



  }
}
