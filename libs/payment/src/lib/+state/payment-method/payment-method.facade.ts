import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { PaymentMethod } from '../../models';

import * as PaymentMethodActions from './payment-method.actions';
import { loadPaymentMethod } from './payment-method.actions';
import * as fromPaymentMethod from './payment-method.reducer';
import * as PaymentMethodSelectors from './payment-method.selectors';

@Injectable()
export class PaymentMethodFacade {
  loaded$ = this.store.pipe(
    select(PaymentMethodSelectors.getPaymentMethodLoaded)
  );
  allPaymentMethod$ = this.store.pipe(
    select(PaymentMethodSelectors.getAllPaymentMethod)
  );
  selectedPaymentMethod$ = this.store.pipe(
    select(PaymentMethodSelectors.getSelected)
  );
  loading$ = this.store.pipe(
    select(PaymentMethodSelectors.getPaymentMethodLoadingState)
  );
  totalPaymentMethod$ = this.store.pipe(
    select(PaymentMethodSelectors.getTotalPaymentMethod)
  );

  constructor(
    private readonly store: Store<fromPaymentMethod.PaymentMethodPartialState>) {}

    getPaginatedPaymentMethod(state: any) {
      this.store.dispatch(
        PaymentMethodActions.getPaginatedPaymentMethod({ state })
      );
    }
  
    createNewPaymentMethod(paymentMethod: PaymentMethod) {
      this.store.dispatch(PaymentMethodActions.createPaymentMethod(paymentMethod));
    }

    loadPaymentMethod() {
      this.store.dispatch(loadPaymentMethod());
    }
  

}
