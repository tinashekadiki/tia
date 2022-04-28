import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import {UserGroups } from '../../models';

import * as UserGroupsActions from './user-groups.actions';
import { loadUserGroups } from './user-groups.actions';
import * as fromUserGroups from './user-groups.reducer';
import * as UserGroupsSelectors from './user-groups.selectors';

@Injectable()
export class UserGroupsFacade {
  loaded$ = this.store.pipe(
    select(UserGroupsSelectors.getUserGroupsLoaded)
  );
  allUserGroups$ = this.store.pipe(
    select(UserGroupsSelectors.getAllUserGroups)
  );
  selectedUserGroups$ = this.store.pipe(
    select(UserGroupsSelectors.getSelected)
  );
  loading$ = this.store.pipe(
    select(UserGroupsSelectors.getUserGroupsLoadingState)
  );
  totalUserGroups$ = this.store.pipe(
    select(UserGroupsSelectors.getTotalUserGroups)
  );

  constructor(
    private readonly store: Store<fromUserGroups.UserGroupsPartialState>) {}

    getPaginatedUserGroups(state: any) {
      this.store.dispatch(
        UserGroupsActions.getPaginatedUserGroups({ state })
      );
    }
  
    createNewUserGroups(userGroups: UserGroups) {
      this.store.dispatch(UserGroupsActions.createUserGroups(userGroups));
    }

    loadUserGroups() {
      this.store.dispatch(loadUserGroups());
    }
  

}
