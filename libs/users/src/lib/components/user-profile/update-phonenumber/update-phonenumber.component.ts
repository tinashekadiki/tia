import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'front-application-update-phonenumber',
  templateUrl: './update-phonenumber.component.html',
  styleUrls: ['./update-phonenumber.component.scss']
})
export class UpdatePhonenumberComponent implements OnInit {
  public phoneForm!: FormGroup;
  @Output() formValue = new EventEmitter();
  

  constructor( private frmb: FormBuilder,private phoneService:UsersService,private nzNotificatons: NzNotificationService) { }

  ngOnInit(): void {
    this.updateForm();
  }
  private updateForm() {
    this.phoneForm = this.frmb.group({
      mobilePhoneNumber: ['', Validators.required]
    });
  }

  update() {
    // let dataTosend  = this.phoneForm.value;
   
    
    // console.log(dataTosend);
    this.phoneService.updateToUrl('/user-accounts/phone-number', this.phoneForm.value).subscribe(
       result => {
        console.log(this.phoneForm.value);
        this.nzNotificatons.success('Updated','Updated Successfully')
        }
      
        
    );
   
    }

}
