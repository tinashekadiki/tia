import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PaymentMethod } from '../../models';
import { PaymentMethodService } from '../../services/payment-method.service';

@Component({
  selector: 'front-application-payment-method-form',
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.scss']
})
export class PaymentMethodFormComponent implements OnInit {
  @Input() paymentMethod: PaymentMethod[];
  @Output() formValue = new EventEmitter();
  public paymentMethodForm!: FormGroup;
  local_data:any;
  action:string;

  constructor(private fb: FormBuilder, private service: PaymentMethodService,
    private nzNotifications: NzNotificationService,
    public dialogRef: MatDialogRef<PaymentMethodFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PaymentMethod) {
      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
    }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }


  ngOnInit(): void {
    this.createForm(this.data);
  }

  private createForm(data: any) {
    {
      data=data || {
        name: [],
        description: [],
        status: ['SUBMITTED'],
      }
      return this.paymentMethodForm = new FormGroup({
        id: new FormControl(data.id, Validators.required),
        name: new FormControl(data.name, Validators.required),
      description:new FormControl(data.description, Validators.required),
        });
        
      }}

  save() {
    var svc;
    console.log(this.paymentMethodForm.value)
    this.local_data.id ? svc = this.service.updateToUrl(`/payment-methods/${this.local_data.id}`, this.paymentMethodForm.value) 
    : svc = this.service.postToUrl('/payment-methods', this.paymentMethodForm.value);
    svc.subscribe((result) => {
        this.nzNotifications.success('Saved', 'Saved Successfully');
        this.ngOnInit();
      });
  }

}
