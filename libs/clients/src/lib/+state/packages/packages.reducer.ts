import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {createReducer, on, Action} from '@ngrx/store';

import * as PackagesActions from './packages.actions';
import {PackagesEntity} from './packages.models';

export const PACKAGES_FEATURE_KEY = 'packages';

export interface State extends EntityState<PackagesEntity> {
  selectedId?: string | number; // which Packages record has been selected
  loaded: boolean; // has the Packages list been loaded
  error?: string | null; // last known error (if any)
}

export interface PackagesPartialState {
  readonly [PACKAGES_FEATURE_KEY]: State;
}

export const packagesAdapter: EntityAdapter<PackagesEntity> =
  createEntityAdapter<PackagesEntity>();

export const initialState: State = packagesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const packagesReducer = createReducer(
  initialState,
  on(PackagesActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PackagesActions.loadPackagesSuccess, (state, {packages}) => {
      return packagesAdapter.setAll(packages, state)
    }
  ),
  on(PackagesActions.loadPackagesFailure, (state, {error}) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return packagesReducer(state, action);
}
