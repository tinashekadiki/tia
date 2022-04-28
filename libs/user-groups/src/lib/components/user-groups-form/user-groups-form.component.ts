import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserGroups } from '../../models/user-groups';
import { UserGroupService } from '../../services';

@Component({
  selector: 'front-application-user-groups-form',
  templateUrl: './user-groups-form.component.html',
  styleUrls: ['./user-groups-form.component.scss'],
})
export class UserGroupsFormComponent implements OnInit {
  @Input() userGroup: UserGroups[];
  @Output() formValue = new EventEmitter();
  public userGroupForm!: FormGroup;
  action:string;
  local_data:any;
  isAddGroup:Boolean
  // addOn:AddOn
local: any;

  dataSource: MatTableDataSource<Permissions>;


  constructor(
    private frmb: FormBuilder,
    private nzNotificatons: NzNotificationService,
    private userGroupService: UserGroupService,
    public dialogRef: MatDialogRef<UserGroupsFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserGroups) {
      console.log(data);
      this.local_data = {...data};
      this.local = this.local_data.value
      this.action = this.local_data.action;
      if(this.action=='Add'){
        this.isAddGroup= true
      }
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
         currencyCode: [],
         value: [],
      }
      return this.userGroupForm = new FormGroup({
              name: new FormControl(data.name, Validators.required),
      description:new FormControl(data.description, Validators.required),
        
        });
        
      }
  }
  save() {
    this.userGroupService
      .postToUrl('/groups', this.userGroupForm.value)
      .subscribe((result) => {
        this.nzNotificatons.success('Saved', 'Created Successfully');
        this.ngOnInit();
      });
  }
  updateGroup(){
    const dataToPost = this.userGroupForm.value;
    console.log(dataToPost);
    
    this.userGroupService.updateToUrl(`/groups/${this.data.id}`,dataToPost).subscribe({
      next:(res)=>{
        this.nzNotificatons.success('Updated','Group updated')
      }
    })


  }
}
