import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API, DefaultService } from '@front-application/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends DefaultService<any> {
  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }

  private getUsername(): string {
    const token = sessionStorage.getItem('token') ?? '';
    if (token.length) {
      return this.jwtHelperService.decodeToken(token).user_name;
    } else return '';
  }

  getCustomer(): Observable<Customer> {
    const username = this.getUsername();
    if (username.length) {
      return this.httpClient.get<Customer>(
        `${API.KYC}api/v1/customer/by-username/${username}`
      );
    }
    else throw new Error("Not logged in");
  }
}
