import { createAction, props } from '@ngrx/store';
import {  UserGroups } from '../../models';
import { UserGroupsEntity } from './user-groups.models';

export const init = createAction('[UserGroups Page] Init');

export const loadUserGroups = createAction('[UserGroups] Load UserGroups');

export const getPaginatedUserGroups = createAction(
  '[Usergroups] Get Paginated UserGroups',
  props<{state: any}>()
  );
  export const getPaginatedUserGroupsSuccess = createAction(
    '[UserGroups] Get Paginated UserGroups Success',
    props<{ 
      userGroup: UserGroups[];
      total: number; }>()
  );

  export const getPaginatedUserGroupsFailure = createAction(
    '[UserGroups] Get Paginated UserGroups Failure',
    props<{ error: Error }>()
  );

  export const createUserGroups = createAction(
    '[PaymentMethod] Create PaymentMethod',
    (userGroupDetails: UserGroups) => ({ userGroupDetails })
  );
  export const createUserGroupsSuccess = createAction(
    '[Usergroups] Create UserGroups Success',
    (userGroupDetails: UserGroups) => ({ userGroupDetails })
  );

  export const createUserGroupsFailure = createAction(
    '[UserGroups] Create UserGroups Failure',
    props<{ error: Error }>()
  );


export const loadUserGroupsSuccess = createAction(
  '[UserGroups/API] Load UserGroups Success',
  props<{ userGroups: UserGroupsEntity[] }>()
);

export const loadUserGroupsFailure = createAction(
  '[UserGroups/API] Load UserGroups Failure',
  props<{ error: any }>()
);








