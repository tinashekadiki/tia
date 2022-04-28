import { HttpClient } from '@angular/common/http';
import {Component, EventEmitter, Inject, OnInit, Optional, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InsurerService } from '@front-application/insurer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Insurer} from "../../../models";

@Component({
  selector: 'front-application-add-insurer',
  templateUrl: './add-insurer.component.html',
  styleUrls: ['./add-insurer.component.scss']
})
export class AddInsurerComponent implements OnInit {
  form! : FormGroup;
  local_data: any;
  local: any;
  isAddInsurer: boolean;
  action: string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = false
  @Output() formValue = new EventEmitter();


  constructor(
    private formBuilder : FormBuilder,
    private insurerService: InsurerService,
    private http : HttpClient,
    private nzNotificatons: NzNotificationService,
  private dialogRef: MatDialogRef<AddInsurerComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: Insurer) {
  console.log(data);
  this.local_data ={...data};
  this.local = this.local_data.value;
  this.action = this.local_data.action
  if(this.action=='AddInsurer'){
  this.isAddInsurer= true
}

}

doAction(){
  this.dialogRef.close({event:this.action,data:this.local_data});

}

  ngOnInit(): void {
    this.initForm(this.data)
  }

  private initForm(data: any){{
    data= data|| {
      addressLine1: [],
      addressLine2: [],
      addressLine3: [],
      adminEmail: [],
      adminPhoneNumber: [],
      adminUsername: [],
      channel: ['Web'],
      companyEmail: [],
      companyLogoUrl: [],
      companyName: [],
      companyPhoneNumber: [],
      contactPersonFirstName: [],
      contactPersonLastName: [],
      contactPersonEmail: [],
      contactPersonPhoneNumber: [],
      registrationNumber: [],
    }
   return this.form = new FormGroup({
      addressLine1: new FormControl(data.companyProfile? data.companyProfile.addressLine1:null, Validators.required),
      addressLine2: new FormControl(data.companyProfile? data.companyProfile.addressLine2:''),
      addressLine3: new FormControl(data.companyProfile? data.companyProfile.addressLine3:''),
      channel: new FormControl('Web'),
      companyEmail: new FormControl(data.companyProfile? data.companyProfile.email:null, Validators.required),
      companyLogoUrl: new FormControl('image.com'),
      companyName: new FormControl(data.companyProfile? data.companyProfile.name:null, Validators.required),
      registrationNumber: new FormControl(data.registrationNumber, Validators.required),
      companyPhoneNumber: new FormControl(data.companyProfile? data.companyProfile.phoneNumber:null, Validators.required),
  //  }),
  //  this.secondFormGroup = new FormGroup({
      secondaryColor: new FormControl('green'),
      primaryColor: new FormControl('blue'),
      adminEmail: new FormControl(data.admin? data.admin.email:null, Validators.required),
      adminPhoneNumber: new  FormControl(data.admin? data.admin.phoneNumber:null, Validators.required),
      adminUsername: new FormControl(data.admin? data.admin.username: null,Validators.required),
      contactPersonFirstName: new FormControl(data.companyProfile?data.companyProfile.contactPerson? data.companyProfile.contactPerson.firstName:null:null, Validators.required),
      contactPersonLastName:  new FormControl(data.companyProfile?data.companyProfile.contactPerson? data.companyProfile.contactPerson.lastName:null:null, Validators.required),
      contactPersonEmail: new FormControl(data.companyProfile?data.companyProfile.contactPerson? data.companyProfile.contactPerson.email:null:null, Validators.required),
      contactPersonPhoneNumber:new FormControl(data.companyProfile?data.companyProfile.contactPerson? data.companyProfile.contactPerson.phoneNumber:null:null, Validators.required),
    })
  }


  }

  submitForm(){
    this.insurerService.postToUrl('/insurers?redirectUri=http://192.168.10.39:8091/auth/login',this.form.value)
    .subscribe(() => {
      this.nzNotificatons.success('Saved','Created Successfully')
    })
  }

  updateInsurer() {
    const dataToPost = this.form.value;
    dataToPost.id =this.data.id;
    this.insurerService.updateToUrl(`/insurers/${this.data.id}`,dataToPost).subscribe({
      next:(res)=>{
        this.nzNotificatons.success('Updated','Insurer updated ')
      }
    })
  }
}
