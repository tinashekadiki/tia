import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'front-application-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.scss']
})
export class UpdateEmailComponent implements OnInit {
  public emailForm!: FormGroup;
  @Output() formValue = new EventEmitter();
  

  constructor( private frmb: FormBuilder,private emailService:UsersService,private nzNotificatons: NzNotificationService) { }


  ngOnInit(): void {
    this.updateForm();
  }
  private updateForm() {
    this.emailForm = this.frmb.group({
      email: ['', Validators.required]
    });
  }
  update() {
    
    this.emailService.updateToUrl('/user-accounts/email?redirectUri=http://localhost:4200/auth/login', this.emailForm.value).subscribe(
       result => {
        console.log(this.emailForm.value);
        this.nzNotificatons.success('Updated','Updated Successfully')
        }
      
        
    );
   
    }

}
