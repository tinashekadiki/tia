import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface State extends EntityState<ProductsEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  loading?: boolean;
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: State;
}

export const productsAdapter: EntityAdapter<ProductsEntity> =
  createEntityAdapter<ProductsEntity>();

export const initialState: State = productsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const productsReducer = createReducer(
  initialState,
  on(ProductsActions.init, (state) => {
    return ({
      ...state,
      loaded: false,
      loading: false,
      error: null,
    })
  }),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => {

    return productsAdapter.setAll(products, { ...state, loaded: true, loading: false })
  }
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}
