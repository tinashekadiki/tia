import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VehicleDataAccessEntity } from '../../+state/vehicle-data-access/vehicle-data-access.models';
import { getAllVehicleDataAccess } from '../../+state/vehicle-data-access/vehicle-data-access.selectors';
import * as VehiclesActions from '../../+state/vehicle-data-access/vehicle-data-access.actions';
import {API, TokenService} from '@front-application/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Customer } from '../../models/customer';
import { HttpClient } from '@angular/common/http';
import {CustomerService} from "../../clients-services/customer.service";

@Component({
  selector: 'front-application-registered-vehicles',
  templateUrl: './registered-vehicles.component.html',
  styleUrls: ['./registered-vehicles.component.sass']
})
export class RegisteredVehiclesComponent implements OnInit {

  vehicleList$: Observable<VehicleDataAccessEntity[]>;
  customerId: any;
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private customerService:CustomerService,
    private jwtHelperService: JwtHelperService,
    private store: Store<VehicleDataAccessEntity[]>) {
    // this.vehicleList$ = this.store.pipe(select(getAllVehicleDataAccess));
  }

  ngOnInit(): void {
    console.log('init');
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const customerId = user.id
    // this.customerService.getFromUrl(`/customer-assest/get-vehicle-assest/${customerId}`)
  }

  getUsername(){
    const token = sessionStorage.getItem('token') ?? '{}';
    return this.jwtHelperService.decodeToken(token).user_name;
  }

  getCustomerId(){
    const username = this.getUsername();
    const url = `${API.KYC}/api/v1/customer/by-username/${username}`;

    this.http.get<Customer>(url).subscribe(data => {
      this.customerId = data.id;
    })
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  // folders = [
  //   {
  //     name: 'Photos',
  //     updated: new Date('1/1/16'),
  //   },
  //   {
  //     name: 'Recipes',
  //     updated: new Date('1/17/16'),
  //   },
  //   {
  //     name: 'Work',
  //     updated: new Date('1/28/16'),
  //   },
  // ];

}
