import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceResults } from '../models/insurance-results';

@Injectable({
  providedIn: 'root'
})
export class InsuranceResutsServicesService {


  private baseUrl='http://192.168.10.91:8089/api/v1/types/insurer/ids/1/product/1';
  constructor(private http: HttpClient) {
  }

  public getInsuranceTypeResults(productId:string,insurerId:string): Observable<any>{
    return this.http.get<InsuranceResults>(`http://192.168.10.91:8089/api/v1/types/insurer/ids/${insurerId}/product/${productId}`);
  }
}
