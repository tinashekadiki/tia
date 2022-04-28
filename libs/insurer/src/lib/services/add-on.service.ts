import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
import { Observable } from 'rxjs';
import { AddOn } from '../models';
import { Insurer } from '../models/insurer';

@Injectable({
  providedIn: 'root'
})
export class AddOnService extends DefaultService<AddOn>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}
