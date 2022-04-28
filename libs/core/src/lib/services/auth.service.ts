import {JwtHelperService} from '@auth0/angular-jwt';
import {Injectable} from '@angular/core';
import {PERMISSIONS} from '../data/permissions.data';
import {TokenPayload} from '../models';
import {Subject, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {API} from "../data";
import { UserModel } from '@front-application/layouts';

@Injectable()
export class AuthService {

  static NAME = 'token';
  static USER = 'user';
  static TOKEN = '';
  public token: string;
  permissions: PERMISSIONS[] = [];
  tokenPayload: TokenPayload;
  username: string;
  userAction: Subject<void> = new Subject();

  static getToken() {
    throw new Error('Method not implemented.');
  }

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
    this.token = AuthService.TOKEN = <string>this.getToken();
    this.setTokenPayload(this.token);
    if (!this.tokenPayload) return;
    this.permissions = this.tokenPayload.authorities;
  }

  public getTokenPayload(token: string) {
    return this.jwtHelper.decodeToken(token);
  }

  public setTokenPayload(token: string) {
    this.tokenPayload = this.getTokenPayload(token);
    if (this.tokenPayload) return;
    const data: any = {};
    this.tokenPayload = data;
  }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  public saveToken(token: string) {
    sessionStorage.setItem(AuthService.NAME, token);
  }

  public saveUser()  {
    return this.http.get(`${API.USERACCOUNTS}v2/user-accounts/me`).subscribe({
        next: (res) => {
          sessionStorage.setItem(AuthService.USER, JSON.stringify(res));
        }
      }
    )
  }

  public getUser(): UserModel{
    const userString = sessionStorage.getItem(AuthService.USER) ?? '{}';
    return JSON.parse(userString);
  }

  public getToken() {
    return sessionStorage.getItem(AuthService.NAME);
  }

  public clearToken() {
    sessionStorage.clear();
  }

  get getAction(): Observable<void> {
    return this.userAction.asObservable()
  };

  loadAction() {
    this.userAction.next();
  }
}
