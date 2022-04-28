import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Users } from '../../../models';
import { UserProfileService } from '../../../services/user-profile.service';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'front-application-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  
  @Output() formValue = new EventEmitter();
  public updatePasswordForm!: FormGroup;
  @Input() user: Users
  username: any;

  constructor(private userService: UserProfileService,
    private frmb: FormBuilder,
    private route: ActivatedRoute,
    private service: UsersService,
    private nzNotificatons: NzNotificationService) { }

  ngOnInit(): void {
    this.updateForm();
    this.service.getFromUrl('/user-accounts/me').subscribe((res) => {
      this.user = res;
      
    });
  }
  private updateForm() {
    this.updatePasswordForm = this.frmb.group({
          currentPassword: ['', Validators.required],
          newPassword: ['', Validators.required],
          confirmNewPassword: ['', Validators.required]
        });
  }
  save() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.userService.postToUrl(`/user-accounts/password?username=${this.user.username}`, this.updatePasswordForm.value).subscribe(
       result => {      
        this.nzNotificatons.success('Updated','Updated Successfully')
        }
        
    );
   
    }

}
