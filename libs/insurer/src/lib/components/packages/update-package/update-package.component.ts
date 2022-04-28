import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductType, Packages, Currency, Package } from '../../../models';
import { Product } from '../../../models/product';
import { InsurerService } from '../../../services';
import { PackageService } from '../../../services/package.service';
import {QuoteService} from "../../../services/quote.service";
// export interface Pack {
//   id: number;
//   productType: string;
// }

@Component({
  selector: 'front-application-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.scss']
})
export class UpdatePackageComponent implements OnInit {
  public packageForm!: FormGroup;
  // @Input() package: Pack[];
  @Output() formValue = new EventEmitter();

  productTypeList: Array<ProductType> = [];
  productList: Array<Product> = [];
  packagesList: Array<Packages> = [];
  currencyList: Array<Currency> = [];
  res: Package;

  constructor(
    private frmb: FormBuilder,
    private productTypeService: PackageService,
    private motorVehicleQuoteService: QuoteService,
    private packageService: InsurerService,
    private nzNotificatons: NzNotificationService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.res = this.data;
    console.log(this.res);

  }
  private createForm() {
    this.packageForm = this.frmb.group({
      id: [this.res.id],
      insurerId:[this.res.insurerId],
      isRenewal:[this.res.isRenewal],
      motorInsurancePackage:[this.res.motorInsurancePackages],
      motorVehicleTypeId: [this.res.motorVehicleTypeId],
      productId: [this.res.productId],
      currency:[this.res.zwlPrice.currencyCode, Validators.required],
      cost: [this.res.zwlPrice.value, Validators.required],
    });
  }

  ngOnInit(): void {

    this.createForm();
    // this.productTypeService
    //   .getFromUrl('/product-types/all')
    //   .subscribe((res) => {
    //     this.productTypeList = res;
    //   });
    // this.productTypeService.getFromUrl('/products/all').subscribe((res) => {
    //   this.productList = res;
    // });

    // this.productTypeService.getFromUrl('/packages/web/all').subscribe((res) => {
    //   this.packagesList = res;
    // });


    // this.productTypeService.getFromUrl('/currencies/all').subscribe((res) => {
    //   this.currencyList = res;
    // });
  }
  Update() {
    const dataTosend  = this.packageForm.value;
    dataTosend.id = this.res.id
    dataTosend.zwlPrice = {
      value: this.packageForm.value.cost,
      currencyCode: this.packageForm.value.currency
    },
      dataTosend.usdPrice = {
        value: 0,
        currencyCode: ""
      },
      dataTosend.zarPrice = {
        value: 0,
        currencyCode: ""
      }
    delete dataTosend.currency;
    delete dataTosend.cost;
    console.log(dataTosend);
    this.packageService
      .updateToUrl(`/motor-vehicle-quotations`, dataTosend)
      .subscribe((result) => {
        this.nzNotificatons.success('Updated', 'Updated Successfully');
        this.ngOnInit();


      });
  }
}
