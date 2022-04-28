import { Injectable } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {API, DefaultService} from "@front-application/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicleTypesService extends DefaultService<any> {
  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }

}
