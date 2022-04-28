

import {Component,EventEmitter,Inject,Input,OnInit,Output,ViewChild,} from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators,} from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserGroupService } from '../../services';

import { PermissionsService } from '../../services/permissions.service';
export interface UserGroups {
  id: number;
}

@Component({
  selector: 'front-application-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss'],
})
export class UpdateGroupComponent implements OnInit {
  form!: FormGroup;
  @Input() userGroup: UserGroups[];
  @Output() formValue = new EventEmitter();
  permissionsList: Array<Permissions> = [];
  selectPermissionsList: Array<Permissions> = [];

  permissions = new FormControl();

  id: string | null;


  selectAll(ev: any) {
    if (ev._selected) {
      this.permissions.setValue(this.permissionsList);
      ev._selected = true;
    }
    if (ev._selected == false) {
      this.permissions.setValue([]);
    }
  }

  selectPermission(ev: any){
    console.log(ev);
  }

  constructor(
    private frmb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: UserGroups,
    private route: ActivatedRoute,
    private permissionsService: PermissionsService,
    private nzNotificatons: NzNotificationService,
    private updatePermissionService: UserGroupService
  ) {}

  ngOnInit(): void {

    // this.createForm();


  this.initForm(this.data)
 this.permissionsService.getFromUrl('/permissions').subscribe((res) => {
      this.permissionsList = res;
    });
  }
  // private createForm() {
  //   this.groupPermissionsForm = this.frmb.group({});
  // }
  update(id: number) {
    console.log(id);
    console.dir(this.permissions.value);
    this.updatePermissionService
      .updateToUrl(`/groups/${id}/permissions`, this.permissions.value)
      .subscribe((result) => {
        console.log(result);
        this.nzNotificatons.success('Updated', 'Updated Successfully');
        this.ngOnInit();
      });
  }
  private initForm(data: any) {
  {
    data=data || {
      name: [],
      description: [],
       action: [],
    }
    return this.form = new FormGroup({
            name: new FormControl(data.name, Validators.required),
    description:new FormControl(data.description, Validators.required),
       action: new FormControl(data.action, Validators.required),
      });
      
    }
  }
}

