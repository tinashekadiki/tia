import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentStatus } from '../../models/payment-status';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'front-application-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent implements OnInit {
  value = '';
  paymentStatus: Array<PaymentStatus> = [];
  payment: PaymentStatus;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('PaymentStatusComponent');
  }
  checkPaymentStatus() {
    console.log(this.value);
    this.http.get<PaymentStatus>(`http://192.168.10.91:8089/api/v1/payment?orderNumber=${this.value}`).subscribe(response=>{
      console.log(response);
      this.payment = response;
  });

  }

}
