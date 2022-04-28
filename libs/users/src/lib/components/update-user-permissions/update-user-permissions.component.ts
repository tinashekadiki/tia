import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Permissions } from 'libs/user-groups/src/lib/models';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from 'libs/user-groups/src/lib/models/users';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Group } from '../../models';
import { PermissionsService } from '../../services';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'front-application-update-user-permissions',
  templateUrl: './update-user-permissions.component.html',
  styleUrls: ['./update-user-permissions.component.scss']
})
export class UpdateUserPermissionsComponent implements OnInit {
  @Input() user: User[];
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
    private service: UsersService
  ) {}

  ngOnInit(): void {
    // this.createForm();

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
    this.service
      .updateToUrl(`/user-accounts/${id}/permissions`, this.permissions.value)
      .subscribe((result) => {
        console.log(result);
        this.nzNotificatons.success('Updated', 'Updated Successfully');
        this.ngOnInit();
      });
  }
}
export interface UserGroups {
  id: number;
}
