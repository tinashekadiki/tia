import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
import { Observable } from 'rxjs';
import { Insurer } from '../models/insurer';

@Injectable({
  providedIn: 'root'
})
export class InsurerService extends DefaultService<Insurer>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.KYC}api/v1`);
  }
}
