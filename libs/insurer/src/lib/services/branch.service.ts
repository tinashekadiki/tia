import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultService, API } from '@front-application/core';
import { Branch, Customer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BranchService extends DefaultService<Branch>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}
