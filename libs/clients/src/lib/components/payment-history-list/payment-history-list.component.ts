import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentHistoryService } from '../../clients-services';
import { PaymentHistory } from '../../models';

@Component({
  selector: 'front-application-payment-history-list',
  templateUrl: './payment-history-list.component.html',
  styleUrls: ['./payment-history-list.component.scss']
})
export class PaymentHistoryListComponent   implements OnInit {
  columnsToDisplay = ['name', 'amount', 'dateOfPayment'];
  dataSource: MatTableDataSource<PaymentHistory>;

  constructor(public paymentHistoryService: PaymentHistoryService) {
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.load(false)

  }
  load(reload: boolean, _$event?: number) {
    this.paymentHistoryService.getFromUrl('/payment-methods').subscribe(res => {
      this.dataSource.data = res;

    }
    );
  }



}
  