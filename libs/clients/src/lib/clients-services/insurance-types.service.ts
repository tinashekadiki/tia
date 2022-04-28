import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { ProductsEntity } from '../+state/insurance-types/products.models';


@Injectable({
  providedIn: 'root'
})
export class InsuranceTypesService {
  searchInsuranceTypes(action: any): Observable<any> {
    const url = 'http://192.168.10.91:8089/api/v1/products'
    return this.http.get(url);
  }

  constructor(private http: HttpClient) {
  }

  public getInsuranceTypes(): Observable<ProductsEntity[]> {
    const url = 'http://192.168.10.91:8089/api/v1/product-types/all'
    return this.http.get<ProductsEntity[]>(url);
  }
}
