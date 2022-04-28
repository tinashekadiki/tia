import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as VehicleDataAccessActions from './vehicle-data-access.actions';
import * as VehicleDataAccessFeature from './vehicle-data-access.reducer';
import * as VehicleDataAccessSelectors from './vehicle-data-access.selectors';

@Injectable()
export class VehicleDataAccessFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(VehicleDataAccessSelectors.getVehicleDataAccessLoaded)
  );
  allVehicleDataAccess$ = this.store.pipe(
    select(VehicleDataAccessSelectors.getAllVehicleDataAccess)
  );
  selectedVehicleDataAccess$ = this.store.pipe(
    select(VehicleDataAccessSelectors.getSelected)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(VehicleDataAccessActions.init());
  }
}
