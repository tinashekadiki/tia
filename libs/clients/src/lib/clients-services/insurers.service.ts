import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insurer } from '../models/insurer';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InsurersService {
searchInsurers(): Observable<Insurer[]> {
  return this.http.get<Insurer[]>('http://192.168.10.91:8089/api/v1/insurers/all');
}

constructor(private http: HttpClient) { }

}
