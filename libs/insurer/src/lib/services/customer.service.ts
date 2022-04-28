import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DefaultService, API } from '@front-application/core';
import { Customer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends DefaultService<Customer>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.KYC}api/v1`);
  }
}
