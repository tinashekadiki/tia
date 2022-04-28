import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as InsurerActions from './insurer.actions';
import {Insurer} from "../../models/insurer";

export const INSURER_FEATURE_KEY = 'insurer';

export interface State extends EntityState<Insurer> {
  selectedId?: string | number; // which Insurer record has been selected
  loaded: boolean; // has the Insurer list been loaded
  error?: string | null; // last known error (if any)
}

export interface InsurerPartialState {
  readonly [INSURER_FEATURE_KEY]: State;
}

export const insurerAdapter: EntityAdapter<Insurer> =
  createEntityAdapter<Insurer>();

export const initialState: State = insurerAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const insurerReducer = createReducer(
  initialState,
  on(InsurerActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(InsurerActions.loadInsurerSuccess, (state, { insurer }) =>
    insurerAdapter.setAll(insurer, { ...state, loaded: true })
  ),
  on(InsurerActions.loadInsurerFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return insurerReducer(state, action);
}
