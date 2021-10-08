import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ApiService } from 'src/app/services/api.service';
import { LoginPopupComponent } from './login-popup/login-popup.component';

@Component({
  selector: 'app-vay-ngan-hang-header',
  templateUrl: './vay-ngan-hang-header.component.html',
  styleUrls: ['./vay-ngan-hang-header.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class VayNganHangHeaderComponent implements OnInit {
  danhMucMeNus: any = [];
  user: SocialUser;
  loggedIn: boolean;
  invalidLogin: boolean;
  fiexd: boolean;
  navActive: number = 0;
  // ngForm: any;
  @ViewChild('headerDiv') myDiv: HTMLElement;
  constructor(private route: ActivatedRoute,
    private renderer: Renderer2, private dialog: MatDialog, private apiService: ApiService, private router: Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.getDanhMucMenu();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    
    let danhMucId = this.route.snapshot.params['id'];
    this.navActive = danhMucId;
   // alert(danhMucId)
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    // console.log(window.scrollY)
     //let width  = window.innerWidth;
     console.log(window.innerWidth)
    if (window.scrollY >= 100 && window.innerWidth > 600) {
      this.fiexd = true;
      // this.renderer.setStyle(this.myDiv, "color", "blue");
    }else{
      this.fiexd = false;
    }
  }
  getDanhMucMenu() {
    this.apiService.get(`DanhMucPortal/GetDanhMucHienThiMenu`).toPromise().then((data) => {
      this.danhMucMeNus = data;
    })
  }
  onlick(idDanhMuc) {
    this.navActive = idDanhMuc;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([`danh-muc/${idDanhMuc}`]));
  }
  onlickToHome() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([`home`]));
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      if (data) {
        localStorage.setItem('account_g', this.user.id);
      }
    });
    console.log('2', this.user);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
      if (data) {
        localStorage.setItem('account_f', this.user.id);
      }
    });
    console.log('4', this.user);
  }

  signOut(): void {
    this.authService.signOut().then((data) => {
      localStorage.clear();
    });

  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  dangNhap() {
    this.dialog.open(LoginPopupComponent, {
      disableClose: false,
      width: "800px",
      data: {
        Title: "Xác nhận",
        Message: "view-order"
      },
    }).afterClosed(

    ).subscribe((result) => {
      if (result == "Yes") {

      }
    });
  }

}
