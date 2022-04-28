import { createAction, props } from '@ngrx/store';
import { PaymentMethod } from '../../models';


export const loadPaymentMethod = createAction('[PaymentMethod] Load PaymentMethod');

export const getPaginatedPaymentMethod = createAction(
  '[PaymentMethod] Get Paginated PaymentMethod',
  props<{state: any}>()
  );

export const getPaginatedPaymentMethodSuccess = createAction(
  '[PaymentMethod] Get Paginated PaymentMethod Success',
  props<{ 
    paymentMethod: PaymentMethod[];
    total: number; }>()
);

export const getPaginatedPaymentMethodFailure = createAction(
  '[PaymentMethod] Get Paginated PaymentMethod Failure',
  props<{ error: Error }>()
);

export const createPaymentMethod = createAction(
  '[PaymentMethod] Create PaymentMethod',
  (paymentMethodDetails: PaymentMethod) => ({ paymentMethodDetails })
);

export const createPaymentMethodSuccess = createAction(
  '[PaymentMethod] Create PaymentMethodt Success',
  (paymentMethodDetails: PaymentMethod) => ({ paymentMethodDetails })
);

export const createPaymentMethodFailure = createAction(
  '[PaymentMethod] Create PaymentMethod Failure',
  props<{ error: Error }>()
);
