import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Lead } from '../../../models';
import { Product } from '../../../models/product';
import { CustomerService } from '../../../services/customer.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'front-application-update-lead',
  templateUrl: './update-lead.component.html',
  styleUrls: ['./update-lead.component.scss']
})
export class UpdateLeadComponent implements OnInit {
  public leadForm!: FormGroup;
  @Output() formValue = new EventEmitter();
  productIds: Array<Product> = []

  constructor(private frmb: FormBuilder,
    private leadService:CustomerService,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private nzNotificatons: NzNotificationService) { }
    res: Lead;

  ngOnInit(): void {
    this.createForm();
    console.log(this.res);
    
    this.productService.getFromUrl('/products/all').subscribe(res => {
      this.productIds = res;})
  }
  private createForm() {
    this.leadForm = this.frmb.group({
     
      name: [this.res.name, Validators.required],
      email:[this.res.email, Validators.required],
      productId:[this.res.insuranceTypeId, Validators.required],
      notes:[this.res.notes]
     
    });
    
  }

       update(id:number) {
        const dataTosend  = this.leadForm.value;
        // dataTosend.id = this.res.id
        
        delete dataTosend.currency
        console.log(dataTosend);
        this.leadService
          .updateToUrl(`/insurance-package/${id}`, dataTosend)
          .subscribe((result) => {
            this.nzNotificatons.success('Updated', 'Updated Successfully');
            this.ngOnInit();
            
            
          });
      }

}
