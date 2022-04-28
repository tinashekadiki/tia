import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
import { CartOrder } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class PaymentService extends DefaultService<any> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v2`);
  }
}
