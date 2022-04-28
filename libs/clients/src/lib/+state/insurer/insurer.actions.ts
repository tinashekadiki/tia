import { createAction, props } from '@ngrx/store';
import {Insurer} from "../../models/insurer";

export const init = createAction('[Insurer Page] Init');

export const loadInsurerSuccess = createAction(
  '[Insurer/API] Load Insurer Success',
  props<{ insurer: Insurer[] }>()
);


export const loadInsurerFailure = createAction(
  '[Insurer/API] Load Insurer Failure',
  props<{ error: any }>()
);
