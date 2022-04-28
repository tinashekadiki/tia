/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaymentMethod } from '../models';
import { API } from '@front-application/core'
import { DefaultService } from '@front-application/core'


@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService extends DefaultService<PaymentMethod> {

    constructor(httpClient: HttpClient) {
      super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
    }
  }

