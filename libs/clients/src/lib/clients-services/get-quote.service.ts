import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultService, API } from '@front-application/core';
import { Quote, Quotes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuoteService extends DefaultService<Quotes>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}
