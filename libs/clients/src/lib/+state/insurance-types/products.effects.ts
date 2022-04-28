import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs';
import { InsuranceTypesService } from '../../clients-services/insurance-types.service';
import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';

@Injectable()
export class ProductsEffects {
  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductsActions.init),
        mergeMap(() => {
          return this.insuranceTypesService.getInsuranceTypes().pipe(
            map((data: ProductsEntity[]) => {
              return ProductsActions.loadProductsSuccess({ products: data });
            }),
            catchError(async (error) => {
              // return ProductsActions.loadProductsSuccess({products: [{id: 1, name: 'Test', description: 'Test'}]});
              return ProductsActions.loadProductsFailure({ error: 'Failed to load Insurance Products.' });
            }
            )
          );
        })
      )
  );

  constructor(
    private readonly actions$: Actions,
    private insuranceTypesService: InsuranceTypesService,
    // private store: Store<ProductsEntity>
  ) {}
}
