import { Component, EventEmitter, OnInit, Output, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UserGroupService } from 'libs/user-groups/src/lib/services/user-group.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Group } from '../../models';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'front-application-update-user-group',
  templateUrl: './update-user-group.component.html',
  styleUrls: ['./update-user-group.component.scss']
})
export class UpdateUserGroupComponent implements OnInit {
  @Input() group: Group[];
  @Output() formValue = new EventEmitter();
  public groupsForm!: FormGroup;
  groupsList: Array<Group> = [];
 
  groups = new FormControl();
  id: string | null;

  constructor(private frmb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Group,
    private route: ActivatedRoute,
    private usersService: UserGroupService, 
    private nzNotificatons: NzNotificationService,
    private service: UserGroupService) { }

  ngOnInit(): void {
    this.createForm();

    this.service.getFromUrl('/groups').subscribe(res => {
    this.groupsList = res.content;
    
      
    }
    );
  }
  private createForm() {
    this.groupsForm = this.frmb.group({
      
  
    });
    
  }
  update(id:number) {
  
    this.usersService.updateToUrl(`/user-accounts/${id}/groups`, this.groupsForm.value).subscribe(
       result => {
        this.nzNotificatons.success('Updated','Updated Successfully')
        this.ngOnInit();}
      
        
    );
   
    }

}
