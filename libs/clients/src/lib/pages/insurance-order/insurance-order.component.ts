import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {PaymentMethodService} from '../../clients-services/payment-method.service';
import {PackagesService} from '../../clients-services/packages.service';
import {Packages} from '../../models/packages';
import {PaymentMethod} from '../../models/payment-method';
import {CreateOrderService} from '../../clients-services/create-order.service';
import {Order} from '../../models/order';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Payment } from '../../models/payment';
declare let $: any;

@Component({
  selector: 'front-application-insurance-order',
  templateUrl: './insurance-order.component.html',
  styleUrls: ['./insurance-order.component.scss']
})
export class InsuranceOrderComponent implements OnInit {
  // ORD001202200076
  orderNumber='';
  packages: Array<Packages>=[];
  package:Packages;

  payments: Array<Payment>=[];
  paym:Payment ={
    paymentAccount: 0,
    orderNumber: '',
    networkProvider:''

  };

  paymentMethods: Array<PaymentMethod> = [];
  paymentMethod: PaymentMethod;
  productId: any;
  insurerId: any;
  insuranceTypeId: any;
  message: any;
  order: Order = {
    vehicleRegistration: '',
    name: '',
    insurerId: 0,
    productId: 0,
    insuranceTypeId: 0,
    numberOfTerms: 0,
    motorInsurancePackage: '',
    phoneNumber: 0,
  };
clicked = false;
  orderCreated: boolean;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private paymentService: PaymentMethodService,
              private createOrder: CreateOrderService,
              private http: HttpClient,
              private packageService: PackagesService,
  ) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    // this.orderNumber= this.route.snapshot.paramMap.get('orderNumber');
    this.insurerId = this.route.snapshot.paramMap.get('insurerId');
    this.insuranceTypeId = this.route.snapshot.paramMap.get('insuranceTypeId');
    this.order = {
      ...this.order,
      productId: Number(this.productId),
      insurerId: Number(this.insurerId),
      insuranceTypeId: Number(this.insuranceTypeId),
    }
    this.packageService.getPackages().subscribe(response => {
      this.packages = response;
    });

    this.paymentService.getPaymentMethod().subscribe(response => {
      this.paymentMethods = response;
    });


  }

  CreateOrder() {
    const newOrder = {
      ...this.order,
      numberOfTerms: Number(this.order.numberOfTerms),

      name: 'Test'
    }
    this.http.post<Payment>('http://192.168.10.91:8089/api/v1/order/create', newOrder).subscribe(
      response=>{
        this.orderCreated = true;
        this.orderNumber= response.orderNumber;
        this.paym.paymentAccount = this.order.phoneNumber;
    }
    );
  }

  CreatePayment() {
    const newPayment = {
      ...this.paym,
      paymentAccount: String(this.paym.paymentAccount),
      orderNumber: String(this.orderNumber),
      networkProvider: String(this.paym.networkProvider),

    }
    this.http.post<Payment>('http://192.168.10.91:8089/api/v1/payment', newPayment).subscribe(
      response=>{
        console.log(response);


    }
    );
  }

}
