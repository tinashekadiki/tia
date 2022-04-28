import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentMethod } from '../models/payment-method';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  private baseUrl='http://192.168.10.91:8089/api/v1/payment-methods/all';
  constructor(private http: HttpClient) {
  }

  public getPaymentMethod(): Observable<PaymentMethod[]>{
    return this.http.get<PaymentMethod[]>(`${this.baseUrl}`);
  }
}

