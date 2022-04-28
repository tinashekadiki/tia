import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Roles } from '../../models/roles';
import { UserGroupService } from '../../services';
import { PermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'front-application-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss']
})
export class AddRolesComponent implements OnInit {
  @Input() groupRoles: Roles[];
  @Output() formValue = new EventEmitter();
  public groupRolesForm!: FormGroup;
  rolesList: Array<Permissions> = [];
 
  roles = new FormControl();
  id: string | null;
  

  selectAll(ev:any){
   
    if(ev._selected){
this.roles.setValue(this.rolesList);
ev._selected=true;
    }
    if(ev._selected==false){
      this.roles.setValue([]);
    }
    
  }

  constructor(private frmb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Roles,
    private route: ActivatedRoute,
    private permissionsService: PermissionsService, 
    private nzNotificatons: NzNotificationService,
    private updateRolesService: UserGroupService,) { }

  ngOnInit(): void {
    this.createForm();

    this.permissionsService.getFromUrl('/user-accounts/roles').subscribe(res => {
    this.rolesList = res;
    
      
    }
    );
  }
  private createForm() {
    this.groupRolesForm = this.frmb.group({
      
  
    });
    
  }
  update(id:number) {
  
    this.updateRolesService.updateToUrl(`/groups/${id}/roles`, this.roles.value).subscribe(
       result => {
        this.nzNotificatons.success('Updated','Updated Successfully')
        this.ngOnInit();}
      
        
    );
   
    }

}
