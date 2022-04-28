import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  VEHICLE_DATA_ACCESS_FEATURE_KEY,
  State,
  vehicleDataAccessAdapter,
} from './vehicle-data-access.reducer';

// Lookup the 'VehicleDataAccess' feature state managed by NgRx
export const getVehicleDataAccessState = createFeatureSelector<State>(
  VEHICLE_DATA_ACCESS_FEATURE_KEY
);

const { selectAll, selectEntities } = vehicleDataAccessAdapter.getSelectors();

export const getVehicleDataAccessLoaded = createSelector(
  getVehicleDataAccessState,
  (state: State) => state.loaded
);

export const getVehicleDataAccessError = createSelector(
  getVehicleDataAccessState,
  (state: State) => state.error
);

export const getAllVehicleDataAccess = createSelector(
  getVehicleDataAccessState,
  (state: State) => selectAll(state)
);

export const getVehicleDataAccessEntities = createSelector(
  getVehicleDataAccessState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getVehicleDataAccessState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getVehicleDataAccessEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
