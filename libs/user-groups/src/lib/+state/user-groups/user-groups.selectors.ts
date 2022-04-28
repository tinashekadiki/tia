import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USER_GROUPS_FEATURE_KEY,
  State,
  userGroupsAdapter,
  UserGroupsPartialState,
} from './user-groups.reducer';

// Lookup the 'UserGroups' feature state managed by NgRx
export const getUserGroupsState = createFeatureSelector<UserGroupsPartialState,State>(
  USER_GROUPS_FEATURE_KEY
);

const { selectAll, selectEntities } = userGroupsAdapter.getSelectors();

export const getUserGroupsLoaded = createSelector(
  getUserGroupsState,
  (state: State) => state.loaded
);

export const getUserGroupsError = createSelector(
  getUserGroupsState,
  (state: State) => state.error
);

export const getAllUserGroups = createSelector(
  getUserGroupsState,
  (state: State) => selectAll(state)
);

export const getUserGroupsEntities = createSelector(
  getUserGroupsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUserGroupsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUserGroupsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
export const getTotalUserGroups = createSelector(
  getUserGroupsState,
  (state: State) => state.total
);

export const getUserGroupsLoadingState = createSelector(
  getUserGroupsState,
  (state: State) => state.loading
); 