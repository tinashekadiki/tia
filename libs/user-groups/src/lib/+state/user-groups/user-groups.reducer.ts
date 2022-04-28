import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UserGroupsActions from './user-groups.actions';
import { UserGroupsEntity } from './user-groups.models';

export const USER_GROUPS_FEATURE_KEY = 'userGroups';

export interface State extends EntityState<UserGroupsEntity> {
  selectedId?: string | number; // which UserGroups record has been selected
  loaded: boolean; // has the UserGroups list been loaded
  loading: boolean;
  error?: string | null; // last known error (if any)
  total: number;
}

export interface UserGroupsPartialState {
  readonly [USER_GROUPS_FEATURE_KEY]: State;
}

export const userGroupsAdapter: EntityAdapter<UserGroupsEntity> =
  createEntityAdapter<UserGroupsEntity>();

export const initialState: State = userGroupsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  loading: false,
  total: 0,
});

const userGroupsReducer = createReducer(
  initialState,
  on(UserGroupsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
    loading: false,
  })),
  on(UserGroupsActions.createUserGroupsSuccess, (state) => ({
    ...state,
    loaded: true,
    loading: false,
  })),
  on(UserGroupsActions.loadUserGroupsSuccess, (state, { userGroups }) =>
    userGroupsAdapter.setAll(userGroups, { ...state, loaded: true, loading: false,})
  ),
  on(UserGroupsActions.loadUserGroupsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
   
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userGroupsReducer(state, action);
} 
