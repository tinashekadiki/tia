import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PAYMENT_METHOD_FEATURE_KEY,
  State,
  paymentMethodAdapter,
  PaymentMethodPartialState,
} from './payment-method.reducer';

export const getPaymentMethodState = createFeatureSelector<
PaymentMethodPartialState,
State
>(PAYMENT_METHOD_FEATURE_KEY);

const { selectAll, selectEntities } = paymentMethodAdapter.getSelectors();

export const getPaymentMethodLoaded = createSelector(
  getPaymentMethodState,
  (state: State) => state.loaded
);

export const getPaymentMethodError = createSelector(
  getPaymentMethodState,
  (state: State) => state.error
);

export const getAllPaymentMethod = createSelector(
  getPaymentMethodState,
  (state: State) => selectAll(state)
);

export const getPaymentMethodEntities = createSelector(
  getPaymentMethodState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPaymentMethodState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPaymentMethodEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
export const getSelectedPaymentMethod = createSelector(
  getPaymentMethodState,
  (state: State) => state.loaded
);

export const getTotalPaymentMethod = createSelector(
  getPaymentMethodState,
  (state: State) => state.total
);

export const getPaymentMethodLoadingState = createSelector(
  getPaymentMethodState,
  (state: State) => state.loading
);
