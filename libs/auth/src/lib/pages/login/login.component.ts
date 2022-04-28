import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {API, AuthGuard, DefaultService} from '@front-application/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'front-application-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public showLoginForm = false;
  model: Login = {} as Login;

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private uiLoader: NgxUiLoaderService,
              private router: Router, private httpClient: HttpClient, private guard: AuthGuard,
              private route: ActivatedRoute,
              private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.dialog.closeAll();
    this.guard.service.clearToken();
    if (sessionStorage.getItem('refresh-session'))
      sessionStorage.removeItem('refresh-session')
  }

  login() {
    const requestBody = new URLSearchParams();
    requestBody.append("username", this.loginForm.value.username);
    requestBody.append("password", this.loginForm.value.password);
    requestBody.append("grant_type", "password");

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa('auth-server:admin123')}`
      })
    };
    this.httpClient.post(`${API.AUTH}oauth/token`, requestBody, options).subscribe((result: any) => {
      this.guard.service.saveToken(result.access_token);
      location.href = this.route.snapshot.queryParams['returnUrl'] ? this.route.snapshot.queryParams['returnUrl'] : '/';
    });
  }
}


interface Login {
  username: string;
  password: string;
}
