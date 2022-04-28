import { Injectable } from '@angular/core';
import {API, DefaultService} from "@front-application/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicleAgentService extends DefaultService<any>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}
