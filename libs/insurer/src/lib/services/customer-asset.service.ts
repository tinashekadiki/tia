import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultService, API } from '@front-application/core';
import { CustomerAsset } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomerAssetService extends DefaultService<CustomerAsset>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.KYC}api/v1`);
  }
}
