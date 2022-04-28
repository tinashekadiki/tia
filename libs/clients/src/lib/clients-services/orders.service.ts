import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {VehicleDataAccessEntity} from "@front-application/clients";
import {Observable} from "rxjs";
import {PackagesEntity} from "../+state/packages/packages.models";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {  }

  getPackages() : Observable<string[]>{
    return this.http.get<string[]>(
      `http://192.168.10.91:8089/api/v1/packages`
    );
  }
}
