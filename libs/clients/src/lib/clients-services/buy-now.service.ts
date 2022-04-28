import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class BuyNowService extends DefaultService<Order>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }

  }
