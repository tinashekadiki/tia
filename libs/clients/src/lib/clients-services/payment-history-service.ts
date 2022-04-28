import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API, DefaultService } from '@front-application/core';
import { PaymentHistory } from '../models';

@Injectable()
export class PaymentHistoryService extends DefaultService<PaymentHistory> {

  constructor(httpClient: HttpClient) {
    super(httpClient, `${API.SERVICE}api/v1`);
  }
}
