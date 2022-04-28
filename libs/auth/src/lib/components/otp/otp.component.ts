import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'front-application-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.sass']
})
export class OtpComponent implements OnInit {
  public data: any;
  public token: null | string = null;

  constructor(@Inject(MAT_DIALOG_DATA) public user: any, private http: HttpClient, private router: Router,) {
    this.data = user;
  }

  ngOnInit() {
    console.log(this)
  }



  confirmOtp() {
    const url = `http://192.168.10.91:8087/v1/customer-sign-ups/confirmation`;
    const http$ = this.http.get<any>(url, {
      params: {
        redirectUri: 'http://192.168.10.91:8083/auth/login',
        token: this.token ?? '',
        username: this.user.username,
      }
    });

    http$.subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        if(err.status === 200){
          this.router.navigate(['/auth/login']);
        }
        console.warn('Error ', err)
      }
    })

  }

  resendOtp(){
    const url = `http://192.168.10.91:8087/v1/customer-sign-ups/confirmation/resend`;
    const http$ = this.http.get<any>(url, {
      params: {
        redirectUri: 'http://192.168.10.91:8083/auth/login',
        username: this.data.user.username,
      }
    });
    http$.subscribe({
      next: () => {
      },
      error: (err) => {
        console.warn('Error ', err)
      }
    })
  }

  onOtpChange(event: string) {
    if(event.length === 6){
      this.token = event;
    }
    else {
      this.token = null;
    }
  }
}
