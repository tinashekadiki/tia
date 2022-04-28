import { Injectable } from '@angular/core';
import {API, DefaultService} from "@front-application/core";
import {Insurer} from "../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InsurersService extends DefaultService<Insurer>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}

