import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {API} from '@front-application/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {CreateOrderService} from '../../clients-services/create-order.service';
import {PaymentMethodService} from '../../clients-services/payment-method.service';
import {PaymentService} from '../../clients-services/payment.service';
import {PaymentMethod} from '../../models/payment-method';

@Component({
  selector: 'front-application-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css'],
})
export class PaymentMethodComponent implements OnInit {
  paymentMethods: Array<PaymentMethod> = [];
  public data: any;
  public phoneNumber: string;
  public paymentType = '';
  private orderNumber: any;

  constructor(
    private createOrderService: CreateOrderService,
    private paymentService: PaymentMethodService,
    private processPaymentService: PaymentService,
    @Inject(MAT_DIALOG_DATA) data: any,
    private nzNotificatons: NzNotificationService,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PaymentMethodComponent>
  ) {
    this.data = data;
  }

  ngOnInit(): void {
    this.initialisePhone();
    this.paymentService.getPaymentMethod().subscribe((response) => {
      this.paymentMethods = response;
    });
  }

  initialisePhone() {
    if (Object.keys(this.data.order ?? {}).length) {
      this.phoneNumber = this.data.order.phoneNumber;
      this.determineNetwork({target: {value: this.phoneNumber}});
    }
  }

  processPayment(paymentMethod: PaymentMethod): void {
    const requestBody = {
      paymentAccount: this.phoneNumber,
      orderNumber: this.data.orderNumber,
      networkProvider: this.paymentType,
    };
    this.processPaymentService.postToUrl('/payment', requestBody).subscribe({
      next: () => {
        this.nzNotificatons.success('Transaction initiated', 'Check Your Phone To enter PIN');
        this.dialogRef.close();
        // this.router.navigateByUrl('/client');
      }, error: () => {
        this.nzNotificatons.error('Failed', '');
      }
    })
  }

  determineNetwork(phoneNumber: any) {
    const econet = /07[7-8][0-9]{7}$/;
    const netone = /071[0-9]{7}$/;
    const telecel = /073[0-9]{7}$/;

    if (econet.test(phoneNumber.target.value)) {
      this.paymentType = 'ecocash';
    } else if (netone.test(phoneNumber.target.value)) {
      this.paymentType = 'onemoney';
    } else if (telecel.test(phoneNumber.target.value)) {
      this.paymentType = 'telecash';
    } else {
      this.paymentType = 'other';
    }
  }

  async addToCart() {
    const requestBody = {
      cartId: this.data.cartId,

    };
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const customerId = user.id;
    this.createOrderService.postToUrl('/order/web', requestBody).subscribe({
      next: (res) => {
        this.orderNumber =res.orderNumber,
        this.dialog.open(PaymentMethodComponent, {
          disableClose: true,
          width: '25%',
          data: {
            showPhoneNumberInput: false,
            orderNumber: this.orderNumber,
            phoneNumber : this.phoneNumber,
          },
        });
        this.dialogRef.close();
      },
    });
  }

  showPaymentMethod(paymentMethod: PaymentMethod): boolean {
    if (paymentMethod.name.toLowerCase() === 'zipit') {
      return true;
    } else {
      return this.paymentType.toLowerCase() === paymentMethod.name.toLowerCase();
    }
  }
}
