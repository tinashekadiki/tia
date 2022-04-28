import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { VehicleDataAccessEntity } from "../..";
import {API, DefaultService, TokenService} from "@front-application/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Customer } from "../models/customer";


@Injectable({
    providedIn: 'root',
})

export class VehiclesService extends DefaultService<any>{
    customerId: any;
    id: any;


    constructor(
        private tokenService: TokenService,
        private jwtHelperService: JwtHelperService,
        private httpClient: HttpClient,
    ) {
      super(httpClient, `${API.QUOTE_AND_BUY}api/v1`);
    }

    getUsername(){
        const token = sessionStorage.getItem('token') ?? '{}';
        return this.jwtHelperService.decodeToken(token).user_name;
      }

      getCustomerId(){

        const token = sessionStorage.getItem('token') ?? '{}';
        const username = this.jwtHelperService.decodeToken(token).user_name;

        const url = `http://192.168.10.91:8090/api/v1/customer/by-username/${username}`;

        this.httpClient.get<Customer>(url).subscribe(data => {
          this.customerId = data.id;
        })
      }

     getVehicles() {

        // const x =  await this.getCustomerId();
        return this.httpClient.get<VehicleDataAccessEntity[]>(
            `${API.QUOTE_AND_BUY}api/v1/customer-asset/get-vehicle-asset/${this.customerId}`
        );
    }




}
