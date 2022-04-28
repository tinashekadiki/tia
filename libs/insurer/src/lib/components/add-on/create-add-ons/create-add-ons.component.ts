import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AddOnService, PackageService } from '../../../services';
import { AddOn, Currency } from '../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'front-application-create-add-ons',
  templateUrl: './create-add-ons.component.html',
  styleUrls: ['./create-add-ons.component.scss']
})
export class CreateAddOnsComponent implements OnInit {
  form!: FormGroup;
  isAddOn: boolean;
  currencyList: Array<Currency> = [];
  id: string;
  action:string;
  local_data:any;
  addOn:AddOn

  constructor(
    private formBuilder: FormBuilder,
    private service: AddOnService,
    private route: ActivatedRoute,
    private router: Router,
    private nzNotificatons: NzNotificationService,
    private packageService: PackageService,
    public dialogRef: MatDialogRef<CreateAddOnsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AddOn) {
      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
    }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  ngOnInit(): void {
    this.initForm(this.data)
    this.packageService.getFromUrl('/currencies/all').subscribe((res) => {
      this.currencyList = res;
    });
  }

  private initForm(data: any) {
    {
      data=data || {
        name: [],
        description: [],
         currencyCode: [],
         value: [],
      }
      return this.form = new FormGroup({
              name: new FormControl(data.name, Validators.required),
      description:new FormControl(data.description, Validators.required),
        currencyCode: new FormControl(data.value ? data.value.currencyCode : null, Validators.required),
          value: new FormControl(data.value ? data.value.value : null, Validators.required),
        });
        
      }}
  

  submitForm() {
    const dataTosend = this.form.value;
    dataTosend.value = {
      value: this.form.value.value,
      currencyCode: this.form.value.currencyCode
    }

      this.service.postToUrl('/addon/create', dataTosend).subscribe({
        next: () => {
          this.nzNotificatons.success('Saved', 'Created Successfully')
        }
      })

  }

}

