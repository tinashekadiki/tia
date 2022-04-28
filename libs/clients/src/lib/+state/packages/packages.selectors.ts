import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PACKAGES_FEATURE_KEY,
  State,
  packagesAdapter,
} from './packages.reducer';

// Lookup the 'Packages' feature state managed by NgRx
export const getPackagesState =
  createFeatureSelector<State>(PACKAGES_FEATURE_KEY);

const { selectAll, selectEntities } = packagesAdapter.getSelectors();

export const getPackagesLoaded = createSelector(
  getPackagesState,
  (state: State) => state.loaded
);

export const getPackagesError = createSelector(
  getPackagesState,
  (state: State) => state.error
);

export const getAllPackages = createSelector(getPackagesState, (state: State) =>
  selectAll(state)
);

export const getPackagesEntities = createSelector(
  getPackagesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPackagesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPackagesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
