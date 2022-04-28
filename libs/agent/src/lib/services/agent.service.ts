import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {API, DefaultService} from "@front-application/core";
import {Agent} from "../models";


@Injectable({
  providedIn: 'root'
})
export class AgentService  extends DefaultService<Agent> {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }



}
