import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as InsurerActions from './insurer.actions';
import * as InsurerFeature from './insurer.reducer';
import * as InsurerSelectors from './insurer.selectors';

@Injectable()
export class InsurerFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(InsurerSelectors.getInsurerLoaded));
  allInsurer$ = this.store.pipe(select(InsurerSelectors.getAllInsurer));
  selectedInsurer$ = this.store.pipe(select(InsurerSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(InsurerActions.init());
  }
}
