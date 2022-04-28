
import { Component, OnInit } from '@angular/core';

import { PaymentStatusService } from '../../components/services/payments-status.service';

@Component({
  selector: 'front-application-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  

  constructor(private service: PaymentStatusService) { }

  ngOnInit(): void {
   
  }


}
