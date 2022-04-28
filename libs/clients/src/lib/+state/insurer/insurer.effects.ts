import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as InsurerActions from './insurer.actions';
import * as InsurerFeature from './insurer.reducer';
import {InsurersService} from "../../clients-services/insurers.service";
import {Insurer} from "../../models/insurer";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class InsurerEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InsurerActions.init),
      mergeMap(() => this.insurerService.searchInsurers().pipe(
        map((data: Insurer[]) => InsurerActions.loadInsurerSuccess({insurer: data}))
      )))
  );
  constructor(private readonly actions$: Actions, private insurerService: InsurersService) {}
}
