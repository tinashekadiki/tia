import { createAction, props } from '@ngrx/store';
import { VehicleDataAccessEntity } from './vehicle-data-access.models';

export const init = createAction('[VehicleDataAccess Page] Init');

export const loadVehicleDataAccessSuccess = createAction(
  '[VehicleDataAccess/API] Load VehicleDataAccess Success',
  props<{ vehicleDataAccess: VehicleDataAccessEntity[] }>()
);

export const loadVehicleDataAccessFailure = createAction(
  '[VehicleDataAccess/API] Load VehicleDataAccess Failure',
  props<{ error: any }>()
);

export const getRegisteredVehiclesSuccess = createAction(
  '[VehicleDataAccess/API] Get RegisteredVehicleDataAccess Success',
  props<{ vehicleDataAccess: VehicleDataAccessEntity[]}>()
) 
export const getRegisteredVehiclesFailure = createAction(
  '[VehicleDataAccess/API] Get RegisteredVehicleDataAccess Failure',
  props<{ error: any}>()
) 
