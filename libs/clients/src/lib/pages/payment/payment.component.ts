import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentMethodService } from '../../clients-services/payment-method.service';
import { Order } from '../../models/order';
import { PaymentMethod } from '../../models/payment-method';

@Component({
  selector: 'front-application-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentMethods: Array<PaymentMethod> = [];
  paymentMethod: PaymentMethod;

  orderNumber: any;

  order: PaymentMethod = {
    name: '',
    paymentAccount: 0,
    Id: 0,
    description: ''
  };

 

  constructor( 
              private paymentService: PaymentMethodService,
              private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.orderNumber= this.route.snapshot.paramMap.get('orderNumber');
  

    this.paymentService.getPaymentMethod().subscribe(response => {
      this.paymentMethods = response;
    });
  }
  

}
