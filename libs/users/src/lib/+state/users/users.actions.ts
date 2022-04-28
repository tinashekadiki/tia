import { createAction, props } from '@ngrx/store';
import { Users } from '../../models';
import { UsersEntity } from './users.models';

export const init = createAction('[Users Page] Init');


export const loadUsers = createAction('[Users] Load Users');


export const getPaginatedUsers = createAction(
  '[Users] Get Paginated Users',
  props<{state: any}>()
  );

  
  export const getPaginatedUsersSuccess = createAction(
    '[Users] Get Paginated Users Success',
    props<{ 
      user: Users[];
      total: number; }>()
  );

  export const getPaginatedUsersFailure = createAction(
    '[Users] Get Paginated Users Failure',
    props<{ error: Error }>()
  );

  export const createUsers = createAction(
    '[Users] Create Users',
    (userDetails: Users) => ({ userDetails })
  );
  
  export const createUsersFailure = createAction(
    '[Users] Create Users Failure',
    props<{ error: Error }>()
  );


export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: UsersEntity[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);
