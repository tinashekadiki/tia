import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PaymentMethodFacade } from '../../+state/payment-method/payment-method.facade';
import { PaymentMethod } from '../../models';

@Component({
  selector: 'front-application-create-payment-methodh',
  templateUrl: './create-payment-methodh.component.html',
  styleUrls: ['./create-payment-methodh.component.scss']
})
export class CreatePaymentMethodhComponent implements OnInit, OnDestroy {
  paymentMethod!: PaymentMethod;

  public loadedSubscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<CreatePaymentMethodhComponent>,
    public paymentMethodFacade: PaymentMethodFacade,
  ) {}

  ngOnInit(): void {
    this.paymentMethodFacade.loadPaymentMethod();
  }

  createPaymentMethod(paymentMethod: PaymentMethod) {
    this.paymentMethodFacade.createNewPaymentMethod(paymentMethod);
    this.loadedSubscription = this.paymentMethodFacade.loaded$.subscribe((res) =>
      res ? this.dialogRef.close(true) : null
    );
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }
}
