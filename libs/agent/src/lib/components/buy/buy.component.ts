import {Component, Inject, OnInit} from '@angular/core';
import {BuyService} from "../../services/buy.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'front-application-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  phoneNumber: any;
  orderCreated: boolean;
  orderNumber='';
  paymentAccount='';

  constructor( private buyService: BuyService,
               private router: Router,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private dialogRef: MatDialogRef<BuyComponent>,
               private nzNotificatons: NzNotificationService,) { }

  ngOnInit(): void {
  }

  proceedToPay() {

    const requestBody = {
      insurerId: this.data.quote.insurerId,
      motorVehicleQuotationId: this.data.quote.quotationId,
      addOns: this.data.selectedAddOns,
      motorInsurancePackage: "Insurance Only",
      paymentAccount: this.phoneNumber,
      vehicleRegistration: this.data.vehicleRegistrationNumber,
      customerId: 0,
    };
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');

    this.buyService.postToUrl(`/buy-now?paymentMethod=${this.data.paymentMethod}`, requestBody).subscribe({
      next: (response) => {
        if(this.data.paymentMethod=='CASH'){
          this.nzNotificatons.success('Success','CASH PAYMENT')
        }
        else {
          this.nzNotificatons.success('Success','Check Your Phone To Enter PIN')
        }

        this.orderCreated = true;
        this.orderNumber= response.orderNumber;
        this.phoneNumber = response.phoneNumber;
        this.router.navigateByUrl('agent/purchase');

        this.dialogRef.close();
      },
    });
  }
}
