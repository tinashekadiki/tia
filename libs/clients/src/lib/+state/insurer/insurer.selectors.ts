import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INSURER_FEATURE_KEY, State, insurerAdapter } from './insurer.reducer';

// Lookup the 'Insurer' feature state managed by NgRx
export const getInsurerState =
  createFeatureSelector<State>(INSURER_FEATURE_KEY);

const { selectAll, selectEntities } = insurerAdapter.getSelectors();

export const getInsurerLoaded = createSelector(
  getInsurerState,
  (state: State) => state.loaded
);

export const getInsurerError = createSelector(
  getInsurerState,
  (state: State) => state.error
);

export const getAllInsurer = createSelector(getInsurerState, (state: State) =>
  selectAll(state)
);

export const getInsurerEntities = createSelector(
  getInsurerState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getInsurerState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getInsurerEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
