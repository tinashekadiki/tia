import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BuyNowService } from '../../clients-services/buy-now.service';
import { CreateOrderService } from '../../clients-services/create-order.service';
import { PaymentMethodService } from '../../clients-services/payment-method.service';
import { PaymentService } from '../../clients-services/payment.service';
import { PaymentMethod } from '../../models/payment-method';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

@Component({
  selector: 'front-application-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit {
  paymentMethods: Array<PaymentMethod> = [];

  public phoneNumber: string;
  public paymentType = '';
  // email = new FormControl('', [Validators.required, Validators.email]);
  orderCreated: boolean;
  orderNumber='';
  paymentAccount='';

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  constructor(
    private buyNowService: BuyNowService,
    private paymentService: PaymentMethodService,
    private processPaymentService: PaymentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // @Inject(MAT_DIALOG_DATA) public data: UserGroups,
    private nzNotificatons: NzNotificationService,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PaymentMethodComponent>
  ) {
    this.data =data
  }

  ngOnInit(): void {
    this.initialisePhone();
    this.paymentService.getPaymentMethod().subscribe((response) => {
      this.paymentMethods = response;
    });
  }

  initialisePhone() {
    if(Object.keys(this.data.order ?? {}).length){
      this.phoneNumber = this.data.order.phoneNumber;
      this.determineNetwork({target:{value: this.phoneNumber}});
    }
  }


  // checkout() {
  //   this.dialog.open(PaymentMethodComponent, {
  //     disableClose: true,
  //     width: '25%',
  //     data: {
  //       showPhoneNumberInput: false,

  //     },
  //   });
  // }

  determineNetwork(phoneNumber: any) {
    const econet = /07[7-8][0-9]{7}$/;
    const netone = /071[0-9]{7}$/;
    const telecel = /073[0-9]{7}$/;

    if(econet.test(phoneNumber.target.value)){
      this.paymentType = 'ecocash';
    }
    else if(netone.test(phoneNumber.target.value)){
      this.paymentType = 'onemoney';
    }
    else if(telecel.test(phoneNumber.target.value)){
      this.paymentType = 'telecash';
    }
    else{
      this.paymentType = 'other';
    }
  }

  proceedToPay() {

    const requestBody = {
      insurerId: this.data.quote.insurerId,
      motorVehicleQuotationId: this.data.quote.quotationId,
      // product: {
      //   calculationResponse: this.data.quote.calculationResponse,
      //   addOns: this.data.selectedAddOns,
      // },
      addOns: this.data.selectedAddOns,
      motorInsurancePackage: "Insurance Only",
      paymentAccount: this.phoneNumber,
      vehicleRegistration: this.data.vehicleRegistrationNumber,
      customerId: 0,
    };
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
// this.service.postToUrl('/addon/create', dataTosend).subscribe({
//   next: () => {
//     this.nzNotificatons.success('Saved', 'Created Successfully')
//   }, error: () => {
//     this.nzNotificatons.error('Add-on could not be added', '')
//   }
// })


    this.buyNowService.postToUrl('/buy-now', requestBody).subscribe({
      next: (response) => {
        this.nzNotificatons.success('Success','Check Your Phone To Enter PIN')
        this.orderCreated = true;
        this.orderNumber= response.orderNumber;
        this.phoneNumber = response.phoneNumber;
        this.router.navigateByUrl('/client');
        // this.dialog.open(BuyNowComponent, {
        //   disableClose: true,
        //   width: '25%',
        //   data: {
        //     showPhoneNumberInput: false,
        //     orderNumber: this.orderNumber,
        //     phoneNumber : this.phoneNumber,

        //   },
        // });
        this.dialogRef.close();
      },
    });
  }
  processPayment(paymentMethod: PaymentMethod): void {
    const requestBody = {
      phoneNumber: this.phoneNumber,
      orderNumber: this.orderNumber,
      networkProvider: this.paymentType,

    };
    const orderNumber =this.data.orderNumber
    requestBody.orderNumber =orderNumber
    this.processPaymentService.postToUrl('/payment', requestBody).subscribe({
      next: () => {
        this.nzNotificatons.success('Transaction initiated Successfully', '');
      }, error: () => {
        this.nzNotificatons.success('Transaction initiated Successfully', '');
      }
    })
  }

  showPaymentMethod(paymentMethod: PaymentMethod): boolean{
    if(paymentMethod.name.toLowerCase() === 'zipit'){
      return true;
    }
    else {
      return this.paymentType.toLowerCase() === paymentMethod.name.toLowerCase();
    }
  }
}
