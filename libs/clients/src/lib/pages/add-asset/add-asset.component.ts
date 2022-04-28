import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


interface insuranceType {
  value: string;
  viewValue: string;
}

interface currencyType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'front-application-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.sass']
})


export class AddAssetComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  

  insuranceTypes: insuranceType[] = [
    {value: '0', viewValue: 'Vehicle Insurance'},
    {value: '1', viewValue: 'Life Insurance'},
    {value: '2', viewValue: 'Health Insurance'},
  ];

  CurrencyTypes: currencyType[] = [
    {value: '0', viewValue: 'USD'},
    {value: '1', viewValue: 'RTGS'},
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      customerFullname: ['', Validators.required],
      CustomerPhonenumber: ['', Validators.required],
      firstCustomerAddress: ['', Validators.required],
      secondCustomerAddress: ['', Validators.required],
      customerTown: ['', Validators.required],
      customerDOB: ['', Validators.required],
      ownerFullname: ['', Validators.required],
      ownerPhone: ['', Validators.required],
      vehicleMake: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehicleType: ['', Validators.required],
      manufactureYear: ['', Validators.required],
      vehicleRegNum: ['', Validators.required],
      
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      customerFullname: ['', Validators.required],
      CustomerPhonenumber: ['', Validators.required],
      firstCustomerAddress: ['', Validators.required],
      secondCustomerAddress: ['', Validators.required],
      customerTown: ['', Validators.required],
      customerDOB: ['', Validators.required],
      ownerFullname: ['', Validators.required],
      ownerPhone: ['', Validators.required],
      vehicleMake: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehicleType: ['', Validators.required],
      manufactureYear: ['', Validators.required],
      vehicleRegNum: ['', Validators.required],
    });
  }

}
