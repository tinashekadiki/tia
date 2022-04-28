import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable } from "rxjs";
import { TransactionDetails } from "../models/transactions-details";

@Injectable()
export class PaymentStatusService{
    private baseUrl='http://localhost:8888/sps/supplier';

   
    constructor(private http: HttpClient){ }
   
    public getTransactionsDetails(): Observable<any>{
        return this.http.get<any>(`${this.baseUrl}/all`);
      }
}