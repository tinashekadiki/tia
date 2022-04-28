import {Component, EventEmitter, Inject, OnInit, Optional, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Product } from '../../../models/product';
import { CustomerService } from '../../../services/customer.service';
import { ProductService } from '../../../services/product.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Lead} from "../../../models";
import {LeadsService} from "../../../services/leads.service";


@Component({
  selector: 'front-application-add-leads',
  templateUrl: './add-leads.component.html',
  styleUrls: ['./add-leads.component.scss']
})
export class AddLeadsComponent implements OnInit {
  public leadForm!: FormGroup;
  @Output() formValue = new EventEmitter();
  productIds: Array<Product> = []
  local_data: any;
  local: any;
  action: string;
  isAddLead: boolean;


  constructor(private frmb: FormBuilder,
              private leadService:LeadsService,
              private productService: ProductService,
              private nzNotificatons: NzNotificationService,

  private dialogRef: MatDialogRef<AddLeadsComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: Lead) {
  console.log(data);
  this.local_data ={...data};
  this.local = this.local_data.value;
  this.action = this.local_data.action
  if(this.action=='Add Lead'){
  this.isAddLead= true
}

}
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
  ngOnInit(): void {
    this.createForm(this.data);
    this.productService.getFromUrl('/products/all').subscribe(res => {
      this.productIds = res;})
  }

  private createForm(data: any) {
    {
      data= data ||{
        name:[],
        email:[],
        productId:[],
        notes:[],
      }
     return this.leadForm = new FormGroup({
        name: new FormControl(data.name, Validators.required),
        email: new  FormControl(data.email, Validators.required),
        productId: new  FormControl(data.productId, Validators.required),
       notes: new FormControl(data.notes)
      })
    }

  }
  save() {
    this.leadService.postToUrl('/leads', this.leadForm.value).subscribe(
       result => {
        this.nzNotificatons.success('Saved','Created Successfully')
        this.ngOnInit();}


    );

    }


  updateLead() {
    const dataToPost = this.leadForm.value;
    dataToPost.id = this.data.id;
    this.leadService.updateToUrl(`/leads/${this.data.id}`,dataToPost).subscribe({
      next:(res)=>{
        this.nzNotificatons.success('Updated','Lead updated')
      }
    })
  }
}
