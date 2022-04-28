import { createAction, props } from '@ngrx/store';
import { PackagesEntity } from './packages.models';

export const init = createAction('[Packages Page] Init');

export const loadPackagesSuccess = createAction(
  '[Packages/API] Load Packages Success',
  props<{ packages: PackagesEntity[] }>()
);

export const loadPackagesFailure = createAction(
  '[Packages/API] Load Packages Failure',
  props<{ error: any }>()
);
