import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {VehicleAgentService} from "../../services/vehicle-agent.service";
import {AddOn, Quotes} from "../../../../../clients/src/lib/models";
import {PrintService} from "../../services/print.service";
import {MatDialog} from "@angular/material/dialog";
import {BuyComponent} from "../buy/buy.component";
import {HttpClient} from "@angular/common/http";
import * as FileSaver from 'file-saver';
import { saveAs } from '@progress/kendo-file-saver'
import {API} from "@front-application/core";


@Component({
  selector: 'front-application-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent implements OnInit {
  form! : FormGroup;
  quoteCreated: boolean;
  printOption: boolean;
  result: Array<Quotes>;
  categories : any[] = []
  vehicleTypes : any[] = []
  selectedCategory! : string;
  notSelected = true;
  packages = []

  public selectedAddOns: Array<any> = [];
  public total: Array<any> = [];


  private print: any;

  constructor(private formBuilder: FormBuilder,
              private agentService : VehicleAgentService,
              private nzNotificatons: NzNotificationService,
              private printService :PrintService,
              private dialog: MatDialog,
              private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.initialiseForm()
    this.getPackages();
    this.agentService.getFromUrl('/motor-vehicle/type/categories').subscribe({
      next:(res)=>{
        this.categories=res
      }

    })
  }

  initialiseForm(){

    this.form = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      phoneNumber : ['', Validators.required],
      motorInsurancePackage : ['', Validators.required],
      vehicleRegistrationNumber : ['', Validators.required],
      motorVehicleTypeId : ['', Validators.required],
      vehicleCategory : ['', Validators.required],
      numberOfTerms : ['', Validators.required],
      isRenewal : [false, Validators.required]
    })
  }

  getVehicleTypes(){
    this.notSelected = false;
    this.agentService.getFromUrl(`/motor-vehicle/types?categoryId=${this.selectedCategory}`).subscribe({
      next:(res)=>{
        this.vehicleTypes= res
      }
    })
  }

  getPackages(){
    this.agentService.getFromUrl(`/packages`).subscribe((res) => {
      this.packages =res;
    })
  }
  processAddOn(index: number, item: AddOn, event: any): void {
    if (event.checked) {
      this.selectedAddOns.push(item);
      this.total[index] =
        this.total[index] + (item.value === null ? 0 : item.value.value);
    } else {
      const currentIndex = this.selectedAddOns.findIndex(
        (e) => e.name === item.name
      );
      this.selectedAddOns.splice(currentIndex, 1);
      this.total[index] =
        this.total[index] - (item.value === null ? 0 : item.value.value);
    }
  }

  requestQoute(){
    const quotation = {productId : 2, ...this.form.value}
    this.agentService.postToUrl(`/request-quotation`,quotation ).subscribe((res) => {
      this.quoteCreated = true;
      this.result = res;
      res.forEach((element: Quotes) => {
        this.total.push(
          element.calculationResponse.total.value === null
            ? 0
            : element.calculationResponse.total.value
        );
      });
    }, (error) => {
      this.nzNotificatons.error('Error', error.error.message)
    })

  }

  printQuotation(quote: Quotes) {
    const requestBody = {
      quotationId: quote.quotationId,
      vehicleRegistration: quote.vehicleRegistration,
      insurerId: quote.insurerId,
      insurer: quote.insurer,
      calculationResponse:quote.calculationResponse,
      addOns: quote.addOns,
    };


      this.http.post(`${API.QUOTE_AND_BUY}/api/v1/quotations-print`,requestBody, { responseType: 'blob' })
        .subscribe((response: Blob) => saveAs(response, quote.fileName + '.pdf'));


  }

  buyNow(quote: Quotes) {
    const dialogRef = this.dialog.open(BuyComponent, {
      disableClose: true,
      width: '25%',
      data: {
        showPhoneNumberInput: true,
        quote,
        paymentMethod:'MOBILE',
        selectedAddOns: this.selectedAddOns,
        vehicleRegistrationNumber: this.form.value.vehicleRegistrationNumber,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  cashPayment(quote: Quotes) {
    const dialogRef = this.dialog.open(BuyComponent, {
      disableClose: true,
      width: '25%',
      data: {
        showPhoneNumberInput: false,
        quote,
        paymentMethod:'CASH',
        selectedAddOns: this.selectedAddOns,
        vehicleRegistrationNumber: this.form.value.vehicleRegistrationNumber,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
}
