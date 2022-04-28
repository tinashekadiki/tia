import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {InsuranceResutsServicesService} from '../../clients-services/insurance-resuts-services.service';
import {InsuranceTypesService} from '../../clients-services/insurance-types.service';
import {InsuranceResults} from '../../models/insurance-results';

@Component({
  selector: 'front-application-insurance-results',
  templateUrl: './insurance-results.component.html',
  styleUrls: ['./insurance-results.component.sass']
})
export class InsuranceResultsComponent implements OnInit {
  products: Array<InsuranceResults> = [];

  dataSource = new MatTableDataSource<InsuranceResults>();
  product: InsuranceResults;
  productId: string|null;
  insurerId: string|null;

  constructor(private route: ActivatedRoute, private resultsService: InsuranceResutsServicesService, private http: HttpClient) {
  }

  ngOnInit() {
    // this.productId = this.route.snapshot.paramMap.get('productId');
    // this.insurerId = this.route.snapshot.paramMap.get('insurerId');
    // this.resultsService.getInsuranceTypeResults(this.productId ?? '',this.insurerId ?? '' ).subscribe((response: InsuranceResults[]) => {
    //   this.products = response;
    //   console.log(response);
    // });
  }
}


