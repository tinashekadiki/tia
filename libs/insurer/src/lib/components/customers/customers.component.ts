import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../models';
import { Address } from '../../models/address';
import { CustomerService } from '../../services/customer.service';
import { AddCustomerComponent } from '../customer/add-customer/add-customer.component';

@Component({
  selector: 'front-application-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  address:Address;
  customers: Customer[] = [ ];

  displayedColumns: string[] = ['username','email', 'phoneNumber','firstName','lastName'];
  dataSource = new MatTableDataSource<Customer>(this.customers);
  selection = new SelectionModel<Customer>(true, []);
  res: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  constructor(private customerService: CustomerService,
    private dialog: MatDialog) { }

  public searchCustomer(key:string):void{
    const results: Customer[]=[];
    for (const customer of this.customers){
      if(customer.username.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      customer.phoneNumber.toLowerCase().indexOf(key.toLowerCase())!== -1||
      customer.email.toLowerCase().indexOf(key.toLowerCase())!== -1){
        results.push(customer);
      }
    }
    this.customers =results;
    if (results.length===0|| !key){
      this.allCustomers();
    }
  }

  ngOnInit(): void {
    this.allCustomers()
  }
  allCustomers() {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const insurerId = user.tenantId
    this.customerService.getFromUrl(`/customer/insurer/${insurerId}`).subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;

    }
    );
  }
  showAddCustomerDialog() {
    const dialogRef = this.dialog.open(AddCustomerComponent,
      {
        width: '800px',
        disableClose: true,
      });
    dialogRef.afterClosed().subscribe((res) => {

      if (res) {

        this.allCustomers();
      }
    });
  }

}
