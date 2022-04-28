import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { User } from '../../models/users';
import { UserGroupService } from '../../services/user-group.service';

@Component({
  selector: 'front-application-update-group-users',
  templateUrl: './update-group-users.component.html',
  styleUrls: ['./update-group-users.component.scss']
})
export class UpdateGroupUsersComponent implements OnInit {
  @Input() user: User[];
  @Output() formValue = new EventEmitter();
  public groupUsersForm!: FormGroup;
  usersList: Array<User> = [];
 
  users = new FormControl();
  id: string | null;

  constructor(private frmb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private route: ActivatedRoute,
    private usersService: UserGroupService, 
    private nzNotificatons: NzNotificationService) { }

  ngOnInit(): void {
    this.createForm();

    this.usersService.getFromUrl('/user-accounts').subscribe(res => {
    this.usersList = res.content;
    
      
    }
    );
  }
  private createForm() {
    this.groupUsersForm = this.frmb.group({
      
  
    });
    
  }
  update(id:number) {
  
    this.usersService.updateToUrl(`/groups/${id}/users`, this.groupUsersForm.value).subscribe(
       result => {
        this.nzNotificatons.success('Updated','Updated Successfully')
        this.ngOnInit();}
      
        
    );
   
    }

}
