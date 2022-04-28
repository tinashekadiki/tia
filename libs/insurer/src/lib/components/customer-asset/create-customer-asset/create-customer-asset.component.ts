import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Customer, VehicleMake, VehicleType } from '../../../models';
import { CustomerAssetService } from '../../../services';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'front-application-create-customer-asset',
  templateUrl: './create-customer-asset.component.html',
  styleUrls: ['./create-customer-asset.component.scss']
})
export class CreateCustomerAssetComponent implements OnInit {
  assetForm!: FormGroup;
  @Output() formValue = new EventEmitter();
  customers: Array<Customer> = []
  vehicleMake: Array<VehicleMake> = []
vehicleType: Array<VehicleType> = []

  constructor(private formBuilder: FormBuilder,
              private service:CustomerAssetService,
              private customerService: CustomerService,
              private nzNotificatons: NzNotificationService
              ) { }

  private createForm() {
    this.assetForm = this.formBuilder.group({
      customerId:['', Validators.required],
      phoneNumber:['', Validators.required],
      location:['', Validators.required],
      value:['', Validators.required],
      model:['', Validators.required],
      regNumber:['', Validators.required],
      // value:['', Validators.required],
      vehicleMake: ['', Validators.required],
      vehicleType:['', Validators.required],
      weight: ['', Validators.required],
    });
    
  }
  ngOnInit(): void {
    this.createForm();
    this.customerService.getFromUrl('/customer').subscribe(res => {
      this.customers = res;
      })
      
  }

  save() {
    this.service.postToUrl('/customer-asset', this.assetForm.value).subscribe(
       result => {
        this.nzNotificatons.success('Saved','Created Successfully')
        this.ngOnInit();}
      
        
    );
   
    }


}
export interface AssetTypes {
  id: number;
  value: string;
}