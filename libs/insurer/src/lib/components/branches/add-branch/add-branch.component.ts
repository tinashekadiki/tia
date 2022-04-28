import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Branch, Insurer } from '../../../models';
import { InsurerService } from '../../../services';
import { CustomerService } from '../../../services/customer.service';
import * as  countriesLib from "i18n-iso-countries"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {BranchService} from "../../../services/branch.service";

declare const required: any;
@Component({
  selector: 'front-application-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {
  countries: any = []
  isAddBranch: boolean;
  @Input() branches :Branch | any
  public branchForm!: FormGroup;
  insurer!: Insurer;
  insurers: Array<Insurer> = []
  @Output() formValue = new EventEmitter();
  local_data: any;
  local: any;
  action: string;


  constructor(
    private frmb: FormBuilder,
    private insurerService: InsurerService,
    private branchService: BranchService,
    private nzNotificatons: NzNotificationService,
    private dialogRef: MatDialogRef<AddBranchComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Branch) {
      console.log(data);
      this.local_data ={...data};
      this.local = this.local_data.value;
      this.action = this.local_data.action
      if(this.action=='AddBranch'){
          this.isAddBranch= true
      }

    }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});

  }
  ngOnInit(): void {
    this.initForm(this.data)
    this.getCountries();
    // this.branchService.getFromUrl('/insurers').subscribe(res => {
    //   this.insurers = res;
    // });

    //
    // this.insurerService.getFromUrl('/insurers').subscribe(res => {
    //   this.insurers = res;
    // })
 }

private initForm(data:any){
  {
    data=data ||{
    name: [],
    addressLine1:[],
    addressLine2: [],
    addressLine3: [],
    phoneNumber: [],
    city: [],
    country: [],
  }
  return this.branchForm = new FormGroup({
    name: new FormControl(data.name,Validators.required),
    addressLine1: new FormControl(data.address? data.address.addressLine1:'', Validators.required),
    addressLine2 : new FormControl(''),
    addressLine3: new FormControl(''),
    phoneNumber: new FormControl(data.phoneNumber, Validators.required),
    city: new FormControl(data.address? data.address.city:'', Validators.required),
    country: new FormControl(data.address? data.address.country: '', Validators.required)
  })
 }
}
  // private createForm() {
  //   this.branchForm = this.frmb.group({
  //     name: ['', Validators.required],
  //     addressLine1: ['', Validators.required],
  //     addressLine2: [''],
  //     addressLine3: [''],
  //     phoneNumber: ['', Validators.required],
  //     city: ['', Validators.required],
  //     country: ['', Validators.required],
  //     // insurerId:[[], Validators.required]
  //   });

  // }

  save() {

    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const insurerId = user.tenantId;
    const dataToPost = this.branchForm.value;
    dataToPost.insurerId = insurerId;
    this.branchService.postToUrl('/branches', dataToPost).subscribe(
      result => {
        this.nzNotificatons.success('Saved', 'Created Successfully')
        this.ngOnInit();
      }
    );
  }

  getCountry(countryKey: string): string {
    return countriesLib.getName(countryKey, 'en')
  }

  getCountries() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    countriesLib.registerLocale(require("i18n-iso-countries/langs/en.json"));
    this.countries = Object.entries(countriesLib.getNames("en", { select: "official" })).sort().map((entry) => {
      return {
        id: entry[0],
        name: entry[1],
      }
    })
  }

  updateBranch() {
    const dataToPost = this.branchForm.value;
    dataToPost.id =this.data.id;
    this.branchService.updateToUrl(`/branches/${this.data.id}`,dataToPost

    ).subscribe({
      next:(res)=>{
        this.nzNotificatons.success('Updated', 'Branch Updated Successfully')

      }
    })

  }
}

