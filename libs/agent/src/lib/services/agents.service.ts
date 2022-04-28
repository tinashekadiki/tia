import { Injectable } from '@angular/core';
import {API, DefaultService} from "@front-application/core";
import {Order} from "../models/order";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgentsService extends DefaultService<Order>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.USERACCOUNTS}v1/`);
  }

}
