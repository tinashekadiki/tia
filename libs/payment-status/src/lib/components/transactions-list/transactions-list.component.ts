
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionDetails } from '../models/transactions-details';
import { PaymentStatusService } from '../services/payments-status.service';

@Component({
  selector: 'front-application-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  @Input() transactionDetails: TransactionDetails[];
  @Input() loading: boolean ;
  @Input() total: number ;
  dataSource: MatTableDataSource<TransactionDetails>;
  
  columnsToDisplay: string[]= [
   'paymentAccount',
    'orderNumber',
    'paymentNumber',
    'result',
    
  ];
  transac: any;
  item: TransactionDetails;
  

  constructor(private service: PaymentStatusService) { }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    // this.service.getTransactionsDetails().subscribe((response: TransactionDetails[])=>{
    //   this.transac=response;
    // },
    // (error: HttpErrorResponse)=>{
    //   alert(error.message);
    // });
   
  }
  
  // search(event: Event){
  //   const searchValue=(event.target as HTMLInputElement).value;
  //   this.dataSource.filter =searchValue.trim().toLowerCase();
  // }

}
