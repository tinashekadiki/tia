import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentHistory } from '../../models';

@Component({
  selector: 'front-application-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent   implements OnInit  {
  
  selectedPaymentHistory: PaymentHistory[];
  columnsToDisplay = ['receiptNumber', 'dateOfPayment', 'amount'];
  dataSource: MatTableDataSource<PaymentHistory>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  

  }
}
