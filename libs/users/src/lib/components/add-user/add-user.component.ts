import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UserGroups } from 'libs/user-groups/src/lib/models';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from 'libs/user-groups/src/lib/models/users';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UserGroupService } from 'libs/user-groups/src/lib/services/user-group.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Roles } from '../../models/roles';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'front-application-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  channel = '';
  group: UserGroups;
  role: Roles;
  groups: Array<UserGroups> = [];
  roles: Array<Roles> = [];
  @Output() formValue = new EventEmitter();

  public userForm!: FormGroup;

  constructor(
    private frmb: FormBuilder,
    private userGroupService: UserGroupService,
    private rolesService: RolesService,
    private nzNotificatons: NzNotificationService
  ) {}

  private createForm() {
    this.userForm = this.frmb.group({
      channel: 'Web',
      username: ['', Validators.required],
      email: ['', Validators.required],
      groupIds: [[], Validators.required],
      roles: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.userGroupService.getFromUrl('/groups').subscribe((res) => {
      this.groups = res.content;
    });
    this.rolesService.getFromUrl('/user-accounts/roles').subscribe((res) => {
      this.roles = res;
    });
  }
  save() {
    console.log('saving');
    const dataToPost = this.userForm.value;
    dataToPost.groupIds = [this.userForm.value.groupIds];
    dataToPost.roles = [this.userForm.value.roles];
    this.userGroupService.updateToUrl(`/user-sign-ups?redirectUri=http://192.168.10.91:8081/auth/login`, dataToPost)
      .subscribe((result) => {
        this.nzNotificatons.success('Saved', 'Created Successfully');
      });
  }
}
