import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  // ngForm: any;
  invalidLogin: any;
  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    console.log(form)
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }

    this.apiService.post(`DocGia/Login`, credentials).toPromise().then((data: any) => {
      alert(1)
      console.log(data);

      const token = (<string>data.tokenString);
      //localStorage.setItem("jwt",token);

      localStorage.setItem("jwt", data.tokenString);
      this.dialog.closeAll();
    }, error => {
      console.log(error);
    }
    )
  }
}
