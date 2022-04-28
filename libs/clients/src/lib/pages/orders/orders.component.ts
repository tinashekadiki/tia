import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {OrdersService} from "../../clients-services/orders.service";
import * as PackageActions from "../../+state/packages/packages.actions";
import {getAllPackages, PackagesEntity, PackagesFacade} from "@front-application/clients";

@Component({
  selector: 'front-application-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  packages$ : Observable<any>;
  constructor( private store : Store, private ordersService: OrdersService, private packagesFacade : PackagesFacade) {
    // this.packages$ = this.packagesFacade.allPackages$;
    this.packages$ = this.store.pipe(select(getAllPackages));
  }


  ngOnInit(): void {
    this.store.dispatch(PackageActions.init());
    this.packages$.subscribe(data=>console.log(data));
  }

}
