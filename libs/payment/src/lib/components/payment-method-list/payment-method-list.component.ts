/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PaymentMethod } from '../../models';
import { PaymentMethodService } from '../../services/payment-method.service';
import { PaymentMethodFormComponent } from '../payment-method-form/payment-method-form.component';

@Component({
  selector: 'front-application-payment-method-list',
  templateUrl: './payment-method-list.component.html',
  styleUrls: ['./payment-method-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PaymentMethodListComponent implements OnInit {
  columnsToDisplay = ['name', 'description', 'action'];
  dataSource: MatTableDataSource<PaymentMethod>;

  constructor(public paymentMethodService: PaymentMethodService,
    private nzNotifications: NzNotificationService,  private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.load(false)
  }
  load(reload: boolean, _$event?: number) {
    this.paymentMethodService.getFromUrl('/payment-methods/all').subscribe(res => {
      this.dataSource.data = res;

    }
    );
  }

  delete(paymentMethod: any): void {
    this.paymentMethodService.delete(`/payment-methods/${paymentMethod.id}`).subscribe(() => {
      this.nzNotifications.success('Deleted', 'Payment Method Deleted Successfully!', { nzDuration: 10000 }); this.load(false);
    });
  }

  showAddDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(PaymentMethodFormComponent, {
      width: '800px',
      disableClose: true,
      data:obj
    });
    dialogRef.afterClosed().subscribe(result => {
      this.load(false);
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }
    });
  }
  addRowData(row_obj: any){
    console.log('hie')
  }
  updateRowData(row_obj: any){
    this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.description = row_obj.description;
      }
      return true;
    });
  }

 
}
