import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DefaultService } from '@front-application/core';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService extends DefaultService<Quote>  {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
  }
}
