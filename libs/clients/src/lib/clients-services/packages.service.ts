import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '@front-application/core';
import { Observable } from 'rxjs';
import { Packages } from '../models/packages';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  private baseUrl='http://192.168.10.91:8089/api/v1/packages';
  constructor(private http: HttpClient) {
  }

  public getPackages(): Observable<Packages[]>{
    return this.http.get<Packages[]>(`${this.baseUrl}`);
  }

  public getVehicles(customerId: number): Observable<any>{
    return this.http.get(`${API.QUOTE_AND_BUY}api/v1/customer-asset/get-vehicle-asset/${customerId}`);
  }
}
