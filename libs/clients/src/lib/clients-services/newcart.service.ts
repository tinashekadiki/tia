import { Injectable } from '@angular/core';
import {API, DefaultService} from "@front-application/core";
import {CartOrder} from "../models/order";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewcartService extends DefaultService<CartOrder> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}
