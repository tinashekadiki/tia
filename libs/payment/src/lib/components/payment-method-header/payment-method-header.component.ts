/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Subject } from 'rxjs';
import { PaymentMethod } from '../../models';
import { PaymentMethodService } from '../../services/payment-method.service';

@Component({
  selector: 'front-application-payment-method-header',
  templateUrl: './payment-method-header.component.html',
  styleUrls: ['./payment-method-header.component.scss']
})
export class PaymentMethodHeaderComponent {
  private unsubscribe = new Subject<void>();

  @Input()
  selected: PaymentMethod[];

  constructor(
    private actions: PaymentMethodService,
    private router: Router,
  ) {
  }



  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
