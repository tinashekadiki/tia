import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreateCustomerAssetComponent } from '../../../components/customer-asset/create-customer-asset/create-customer-asset.component';
import { CustomerAsset } from '../../../models';
import { CustomerAssetService } from '../../../services';

@Component({
  selector: 'front-application-customer-asset-list',
  templateUrl: './customer-asset-list.component.html',
  styleUrls: ['./customer-asset-list.component.scss']
})
export class CustomerAssetListComponent implements OnInit {
  customerAsset: CustomerAsset[] = [ ];

  displayedColumns: string[] = ['property.location','vehicle.model', 'phoneNumber'];
  dataSource = new MatTableDataSource<CustomerAsset>(this.customerAsset);
  selection = new SelectionModel<CustomerAsset>(true, []);

  constructor( private customerAssetService: CustomerAssetService,
               private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCustomerAsset(true)
  }
  getAllCustomerAsset(reload: boolean, _$event?: number) {
    this.customerAssetService.getFromUrl('/customer-asset').subscribe(res => {
      this.dataSource = res;
     
    }
    );
  }
  showAddAssetDialog(){
    const dialogRef = this.dialog.open(CreateCustomerAssetComponent,
      {
        width: '800px',
        disableClose: true,
      });
    dialogRef.afterClosed().subscribe((res) => {
      
      if (res) {
       
        this.getAllCustomerAsset(true);
      }
    });

  }
  
}
