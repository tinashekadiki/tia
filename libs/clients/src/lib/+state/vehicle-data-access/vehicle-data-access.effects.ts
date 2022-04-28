import { Injectable } from '@angular/core';
import { VehicleDataAccessEntity } from '@front-application/clients';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VehiclesService } from '../../clients-services/vehicle.service';

import * as VehicleDataAccessActions from './vehicle-data-access.actions';
import * as VehicleDataAccessFeature from './vehicle-data-access.reducer';

@Injectable()
export class VehicleDataAccessEffects {
  init$ = createEffect(() =>
  this.actions$.pipe(
    ofType(VehicleDataAccessActions.init),
    mergeMap(() => {
      return this.vehiclesService.getVehicles().pipe(
        map((data: VehicleDataAccessEntity[]) => {
          
          return VehicleDataAccessActions.loadVehicleDataAccessSuccess({vehicleDataAccess:data});
        }),
        catchError(async (error) => {
          console.log(error);
          // return ProductsActions.loadProductsSuccess({products: [{id: 1, name: 'Test', description: 'Test'}]});
          return VehicleDataAccessActions.loadVehicleDataAccessFailure({ error: 'Failed to load vehicles.' });
        })
      );
    })));

  constructor(private readonly actions$: Actions, private vehiclesService : VehiclesService) {}
}
