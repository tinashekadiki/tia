import { Injectable } from '@angular/core';
import {API, DefaultService} from "@front-application/core";
import {Insurer} from "../models";
import {HttpClient} from "@angular/common/http";
import {Order} from "../../../../agent/src/lib/models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends DefaultService<Order>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}
