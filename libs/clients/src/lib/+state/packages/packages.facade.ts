import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as PackagesActions from './packages.actions';
import * as PackagesFeature from './packages.reducer';
import * as PackagesSelectors from './packages.selectors';

@Injectable()
export class PackagesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(PackagesSelectors.getPackagesLoaded));
  allPackages$ = this.store.pipe(select(PackagesSelectors.getAllPackages));
  selectedPackages$ = this.store.pipe(select(PackagesSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(PackagesActions.init());
  }
}
