import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../clients-services/customer.service';
import { QuoteService } from '../../clients-services/get-quote.service';
import { PackagesService } from '../../clients-services/packages.service';
import { BuyNowComponent } from '../../components/buy-now/buy-now.component';
import { PaymentMethodComponent } from '../../components/payment-method/payment-method.component';
import { AddOn, CalculationResponse, Quotes } from '../../models';
import { VehicleTypesService } from '../../clients-services/vehicle-types.service';
import { MatSelectChange } from '@angular/material/select';
import {CartService} from "../../clients-services/add-cart.service";

@Component({
  selector: 'front-application-get-a-quote',
  templateUrl: './get-a-quote.component.html',
  styleUrls: ['./get-a-quote.component.scss'],
})
export class GetAQuoteComponent implements OnInit {
  @Output() formValue = new EventEmitter();
  quotes: Array<Quotes> = [];
  options!:FormGroup;
  insurance: Array<Quotes> = [];
  quote: Quote;
  licenseTerm: any;
  result: Array<Quotes>;
  public isDiary = false;
  useDiary:boolean;
  productId: any;
  packages: Array<any> = [];
  categories: any;
  vehicles: Array<any> = [];
  public total: Array<any> = [];
  public selectedAddOns: Array<any> = [];
  insurer: '';
  quoteCreated: boolean;
  userActive = false;
  customer: any;
  public vehicleTypeId: any;
  selected = '';
  private vehicleCategory: any;

  constructor(
    private formBuilder: FormBuilder,
    private addCartService: CartService,
    private route: ActivatedRoute,
    private packageService: PackagesService,
    private quoteService: QuoteService,
    private dialog: MatDialog,
    private customerService: CustomerService,
    private vehicleCategoryService: VehicleTypesService
  ) {}

  vehicleTypes: any;
  numberOfTerms: any;
  ngOnInit(): void {
    this.initForm();
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.getPackages();
    this.getVehicles();
    this.getCategories();
    try {
      this.customerService.getCustomer().subscribe({
        next: (cust) => {
          this.customer = cust;
          this.useDiary= true;
        },
        error: (err) => {
          console.warn(err);
          this.customer = { username: 'Guest' };
          this.useDiary =false
        },
      });
    } catch (err) {
      this.customer = { username: 'Guest' };
      this.useDiary= false
    }
  }

  private initForm(){
    this.options = this.formBuilder.group({
      motorInsurancePackage: ['INSURANCE_ONLY', Validators.required],
      isRenewal: [false, Validators.required],
      vehicleRegistrationNumber: ['', Validators.required],
      numberOfTerms: ['', Validators.required,],
      // vehicleCategory: [null, Validators.required],
      motorVehicleTypeId: ['', Validators.required],
    });
  }
  getPackages() {
    this.packageService.getPackages().subscribe((response) => {
      this.packages = response;
    });
  }
  getVehicles() {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    if (Object.keys(user).length > 0) {
      this.customerService.getCustomer().subscribe({
        next: (customer) => {
          this.packageService.getVehicles(customer.id).subscribe((response) => {
            this.vehicles = response
          });
        },
      });
    }
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  getQuote() {
    this.productId = this.route.snapshot.paramMap.get('productId');
    const productId = this.productId;
    const dataToPost = this.options.value;
    dataToPost.productId = productId;

    this.quoteService
      .postToUrl('/order/request-for-quotation', dataToPost)
      .subscribe((response) => {
        this.quoteCreated = true;
        this.result = response;
        response.forEach((element: Quotes) => {
          this.total.push(
            element.calculationResponse.total.value === null
              ? 0
              : element.calculationResponse.total.value
          );
        });
      });
  }

  addCart(quote: Quotes) {

    const requestBody = {

       motorVehicleLineItemRequest:{
         motorVehicleQuotationId: quote.quotationId,
         addOns: this.selectedAddOns,
         vehicleRegistration: this.options.value.vehicleRegistrationNumber,
     },
      insurerId: quote.insurerId,
      customerId: 0,

    };
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const customerId= user.id
    requestBody.customerId = customerId;
    this.addCartService.postToUrl('/cart/add-to-cart', requestBody).subscribe({
      next: (res) => {
        this.categories = res;
      },
    })
  }
  buyNow(quote: Quotes) {
    const dialogRef = this.dialog.open(BuyNowComponent, {
      disableClose: true,
      width: '25%',
      data: {
        showPhoneNumberInput: true,
        quote,
        selectedAddOns: this.selectedAddOns,
        vehicleRegistrationNumber: this.options.value.vehicleRegistrationNumber,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
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

  private getCategories() {
    this.vehicleCategoryService
      .getFromUrl('/motor-vehicle/type/categories')
      .subscribe({
        next: (res) => {
          this.categories = res;
        },
      });
  }
  getVehicleTypeId(id: any) {
    this.vehicleCategoryService
      .getFromUrl(`/motor-vehicle/types?categoryId=${id}`)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.vehicleTypes = response;
        },
      });
  }
}

export interface Quote {
  quote: string;
  vehicle: number;
}
