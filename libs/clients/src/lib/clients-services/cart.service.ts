import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
import { CartOrder } from '../models/order';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService extends DefaultService<CartOrder> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/`);
  }
}
