import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as VehicleDataAccessActions from './vehicle-data-access.actions';
import { VehicleDataAccessEntity } from './vehicle-data-access.models';

export const VEHICLE_DATA_ACCESS_FEATURE_KEY = 'vehicleDataAccess';

export interface State extends EntityState<VehicleDataAccessEntity> {
  selectedId?: string | number; // which VehicleDataAccess record has been selected
  loaded: boolean; // has the VehicleDataAccess list been loaded
  error?: string | null; // last known error (if any)
}

export interface VehicleDataAccessPartialState {
  readonly [VEHICLE_DATA_ACCESS_FEATURE_KEY]: State;
}

export const vehicleDataAccessAdapter: EntityAdapter<VehicleDataAccessEntity> =
  createEntityAdapter<VehicleDataAccessEntity>();

export const initialState: State = vehicleDataAccessAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const vehicleDataAccessReducer = createReducer(
  initialState,
  on(VehicleDataAccessActions.init, (state) => ({
    ...state,
    loaded: false,
    isLoading: false,
    error: null,
  })),
  on(
    VehicleDataAccessActions.loadVehicleDataAccessSuccess,
    (state, { vehicleDataAccess }) =>
      vehicleDataAccessAdapter.setAll(vehicleDataAccess, {
        ...state,
        loaded: true,
      })
  ),
  on(
    VehicleDataAccessActions.loadVehicleDataAccessFailure,
    (state, { error }) => ({ ...state, error })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return vehicleDataAccessReducer(state, action);
}
