import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UserGroupsActions from './user-groups.actions';
import * as UserGroupsFeature from './user-groups.reducer';

@Injectable()
export class UserGroupsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserGroupsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return UserGroupsActions.loadUserGroupsSuccess({ userGroups: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UserGroupsActions.loadUserGroupsFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
