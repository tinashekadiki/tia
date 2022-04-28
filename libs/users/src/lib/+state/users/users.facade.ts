import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import {Users } from '../../models';

import * as UsersActions from './users.actions';
import { loadUsers } from './users.actions';
import * as fromUsers from './users.reducer';
import * as UsersSelectors from './users.selectors';

@Injectable()
export class UserGroupsFacade {
  loaded$ = this.store.pipe(
    select(UsersSelectors.getUsersLoaded)
  );
  allUsers$ = this.store.pipe(
    select(UsersSelectors.getAllUsers)
  );
  selectedUserGroups$ = this.store.pipe(
    select(UsersSelectors.getSelected)
  );
  loading$ = this.store.pipe(
    select(UsersSelectors.getUsersLoadingState)
  );
  totalUserGroups$ = this.store.pipe(
    select(UsersSelectors.getTotalUsers)
  );

  constructor(
    private readonly store: Store<fromUsers.UsersPartialState>) {}

    getPaginatedUserGroups(state: any) {
      this.store.dispatch(
        UsersActions.getPaginatedUsers({ state })
      );
    }
  
    createNewUserGroups(userGroups: Users) {
      this.store.dispatch(UsersActions.createUsers(userGroups));
    }

    loadUserGroups() {
      this.store.dispatch(loadUsers());
    }
  

}
