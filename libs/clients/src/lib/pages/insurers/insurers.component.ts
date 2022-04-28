import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Insurer } from '../../models/insurer';
import {InsurerFacade} from "@front-application/clients";
import * as InsuranceAction from './../../+state/insurer/insurer.actions'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'front-application-insurers',
  templateUrl: './insurers.component.html',
  styleUrls: ['./insurers.component.sass']
})
export class InsurersComponent implements OnInit { 
  insurers$: Observable<Insurer[]>;
  productId: any;
  constructor(private store: Store<Insurer[]>, private insurerFacade: InsurerFacade, private route : ActivatedRoute) {
    this.insurers$ = insurerFacade.allInsurer$;
  }

  ngOnInit(): void {
    console.log(this.insurers$);
    this.store.dispatch(InsuranceAction.init());
    this.productId= this.route.snapshot.paramMap.get('productId');
  }

}
