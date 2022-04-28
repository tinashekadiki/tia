import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { PaymentMethod } from '../../models';

import * as PaymentMethodActions from './payment-method.actions';

export const PAYMENT_METHOD_FEATURE_KEY = 'paymentMethod';

export interface State extends EntityState<PaymentMethod> {
  selectedId?: string | number;
  loaded?: boolean;
  loading: boolean;
  error?: string | null; // last known error (if any)
  // selectedPaymentMethod: PaymentMethod;
  total: number;
}

export interface PaymentMethodPartialState {
  readonly [PAYMENT_METHOD_FEATURE_KEY]: State;
}

export const paymentMethodAdapter: EntityAdapter<PaymentMethod> = createEntityAdapter<
PaymentMethod
>();

export const initialState: State = paymentMethodAdapter.getInitialState({
  loaded: false,
  loading: false,
  error: undefined,
  // selectedPaymentMethod: null,
  total: 0,
});
  
  const paymentReducerReducer = createReducer(
    initialState,
    on(
      PaymentMethodActions.getPaginatedPaymentMethod,
      PaymentMethodActions.createPaymentMethod,
      (state) => ({
        ...state,
        loaded: false,
        error: null,
        loading: false,
      })
    ),
  
    on(PaymentMethodActions.createPaymentMethodSuccess, (state) => ({
      ...state,
      loaded: true,
      loading: false,
    })),
  
    on(
      PaymentMethodActions.getPaginatedPaymentMethodSuccess,
      (state, { paymentMethod, total }) =>
        paymentMethodAdapter.setAll(paymentMethod, {
          ...state,
          loaded: true,
          loading: false,
          total,
        })
    ),
  
    on(
      PaymentMethodActions.getPaginatedPaymentMethodFailure,
      PaymentMethodActions.createPaymentMethodFailure,
      (state, { error }) => ({
        ...state,
        error: null,
        loading: false,
      })
    )
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return paymentReducerReducer(state, action);
  }
  