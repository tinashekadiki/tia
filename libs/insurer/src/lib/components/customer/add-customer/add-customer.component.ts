import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IdType } from '../../../models';
import { CustomerService } from '../../../services/customer.service';
import * as  countriesLib from "i18n-iso-countries"

@Component({
  selector: 'front-application-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  public customerForm!: FormGroup;
  idTypes: Array<IdType> = [];
    countries : any = []
  @Output() formValue = new EventEmitter();

  constructor(private frmb: FormBuilder,
    private customerService:CustomerService,
    
    private nzNotificatons: NzNotificationService) { }

  ngOnInit(): void {
    this.getCountries();

    this.createForm();
    this.customerService.getFromUrl('/customer/identificationTypes').subscribe(res => {
      this.idTypes = res;
      
      
    }
    );
  }

  private createForm() {
    this.customerForm = this.frmb.group({
      channel: 'Web',
     
      firstName: ['', Validators.required],
      addressLine1:['', Validators.required],
      addressLine2:[''],
      addressLine3:['',],
      phoneNumber:['', Validators.required],
      city:['', Validators.required],
      country:['', Validators.required],
      email:['',Validators.required],
      lastName:['', Validators.required],
      username:['', Validators.required],
     identificationValue:['',Validators.required],
      identificationType:['',Validators.required],
       dateOfBirth:['',Validators.required],
       middleNames:['']
     
    });
    
  }
  save() {
    console.log(this.customerForm.value);
    this.customerService.postToUrl('/customer', this.customerForm.value).subscribe(
       result => {
        this.nzNotificatons.success('Saved','Created Successfully')
        this.ngOnInit();}
      
        
    );
   
    }
    getCountry(countryKey: string) : string {
      return countriesLib.getName(countryKey, 'en')
    }

    getCountries(){
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      countriesLib.registerLocale(require("i18n-iso-countries/langs/en.json"));
      this.countries = Object.entries(countriesLib.getNames("en", {select: "official"})).sort().map((entry) => {
        return {
          id: entry[0],
          name: entry[1],
        }
      })
    }
}
