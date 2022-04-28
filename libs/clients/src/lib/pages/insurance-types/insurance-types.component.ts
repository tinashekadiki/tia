import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsEntity } from '../../+state/insurance-types/products.models';
import { getAllProducts, getLoadingState, getProductsError } from '../../+state/insurance-types/products.selectors';
import * as ProductActions from '../../+state/insurance-types/products.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'front-application-insurance-types',
  templateUrl: './insurance-types.component.html',
  styleUrls: ['./insurance-types.component.sass']
})
export class InsuranceTypesComponent implements OnInit {

  products$: Observable<Array<ProductsEntity>>;
  error$: Observable<string | null | undefined>;
  loading$: Observable<boolean>;

  constructor( private router: Router, private store: Store<ProductsEntity[]>) {
    this.products$ = this.store.pipe(select(getAllProducts));
    this.error$ = this.store.pipe(select(getProductsError));
    this.loading$ = this.store.pipe(select(getLoadingState));
  }

  ngOnInit(): void {
    console.log('InsuranceTypesComponent');
    this.store.dispatch(ProductActions.loading());
    this.store.dispatch(ProductActions.init());
  }
  selectInsuranceTypeResults(id: number) {
    this.router.navigate(['/client/insurance-results',id]);
  }

}
