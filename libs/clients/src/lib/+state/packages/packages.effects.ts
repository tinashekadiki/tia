import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PackagesActions from './packages.actions';
import * as PackagesFeature from './packages.reducer';
import {OrdersService} from "../../clients-services/orders.service";
import {mergeMap} from "rxjs";
import {map} from "rxjs/operators";
import {Insurer} from "../../models/insurer";
import * as InsurerActions from "../insurer/insurer.actions";
import {PackagesEntity} from "@front-application/clients";

@Injectable()
export class PackagesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PackagesActions.init),
      mergeMap(() => this.ordersService.getPackages().pipe(
        map((data: string[]) => {
          const newData: Array<PackagesEntity> = [];
          data.map(name => {
            newData.push({name})
          });
          return PackagesActions.loadPackagesSuccess({packages: newData})
        })
      )))
  );

  constructor(private readonly actions$: Actions, private ordersService: OrdersService) {}
}
