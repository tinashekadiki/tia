import { Injectable } from '@angular/core';
import {API, DefaultService} from "@front-application/core";
import {Order} from "../../../../agent/src/lib/models/order";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends DefaultService<any>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}
