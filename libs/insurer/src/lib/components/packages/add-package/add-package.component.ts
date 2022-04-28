import { Component, EventEmitter, Inject, OnInit, Optional, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Currency, Packages, ProductType } from '../../../models';
import { Product } from '../../../models/product';
import { InsurerService } from '../../../services';
import { CustomerService } from '../../../services/customer.service';
import { PackageService } from '../../../services/package.service';
import { QuoteService } from '../../../services/quote.service';

@Component({
  selector: 'front-application-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss'],
})
export class AddPackageComponent implements OnInit {
  public packageForm!: FormGroup;
  @Output() formValue = new EventEmitter();
  productTypeList: Array<ProductType> = [];
  productList: Array<Product> = [];
  packagesList: Array<Packages> = [];
  currencyList: Array<Currency> = [];
  action:string;
  selectedCategory! : string;
  local_data:any;
   categories: any;
  notSelected = true;
  vehicleTypes: any;

  constructor(
    private frmb: FormBuilder,
    private productTypeService: PackageService,
    private quoteService: QuoteService,
    private nzNotificatons: NzNotificationService,
    public dialogRef: MatDialogRef<AddPackageComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Packages) {
      this.local_data = {...data};
      this.action = this.local_data.action;
    }
  private createForm() {

    this.packageForm = this.frmb.group({
      numberOfTerms: ['', Validators.required],
      productId: ['', Validators.required],
      isRenewal: [true, Validators.required],
      motorInsurancePackage: ['', Validators.required],
      motorVehicleTypeId : ['', Validators.required],
      vehicleCategory : ['', Validators.required],
      currencycode:['', Validators.required],
      zvalue: ['', Validators.required],
    });
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }


  ngOnInit(): void {
    this.createForm();
    this.productTypeService
      .getFromUrl('/product-types/all')
      .subscribe((res) => {
        this.productTypeList = res;
      });
    this.productTypeService.getFromUrl('/products/all').subscribe((res) => {
      this.productList = res;
    });
    this.productTypeService.getFromUrl('/motor-vehicle/type/categories').subscribe({
      next:(res)=>{
        this.categories=res
      }

    })

    this.productTypeService.getFromUrl('/packages').subscribe((res) => {
      this.packagesList = res;
    });

    this.productTypeService.getFromUrl('/currencies/all').subscribe((res) => {
      this.currencyList = res;
    });
  }

  save() {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const insurerId = user.tenantId;
    const dataTosend  = this.packageForm.value;

    dataTosend.insurerId = insurerId;


    dataTosend.zwlPrice = {
      value: this.packageForm.value.zvalue,
      currencyCode: this.packageForm.value.currencycode
    }

    delete dataTosend.zvalue;
    delete dataTosend.currencycode;
    console.log(dataTosend);
    this.quoteService
      .postToUrl('/motor-vehicle-quotations', dataTosend)
      .subscribe((result) => {
        this.nzNotificatons.success('Saved', 'Created Successfully');
        this.ngOnInit();
      });
  }
  getVehicleTypes(){
    this.notSelected = false;
    this.productTypeService.getFromUrl(`/motor-vehicle/types?categoryId=${this.selectedCategory}`).subscribe({
      next:(res)=>{
        this.vehicleTypes= res
      }
    })
  }
}
