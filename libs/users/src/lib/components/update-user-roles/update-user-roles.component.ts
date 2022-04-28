import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Users } from '../../models';
import { Roles } from '../../models/roles';
import { RolesService } from '../../services/roles.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'front-application-update-user-roles',
  templateUrl: './update-user-roles.component.html',
  styleUrls: ['./update-user-roles.component.scss']
})
export class UpdateUserRolesComponent implements OnInit {
  role: Roles;
  @Input() user: Users
  id: string | null;
  roles: Array<Roles> = [];
  roless: string[];

  @Output() formValue = new EventEmitter();
  public rolesForm!: FormGroup;
  constructor( private frmb: FormBuilder, private service: RolesService,
    private nzNotificatons: NzNotificationService, private route: ActivatedRoute,
    private userService: UsersService, @Inject(MAT_DIALOG_DATA) public data: {id: string}) { }

    ngOnInit(): void {
      this.updateForm();
      this.service.getFromUrl('/user-accounts/roles').subscribe(res => {
        this.roles= res });
    }

  private updateForm() {
    this.rolesForm = this.frmb.group({
           role: [[], Validators.required]
    });
  }

  update() {
    const requestBody = [];
    requestBody.push(this.rolesForm.value.role);
    this.service.updateToUrl(`/user-accounts/${this.data.id}/roles`, requestBody).subscribe(
       result => {
         console.log(this.user.id);

        this.nzNotificatons.success('Updated','Updated Successfully')
        }

    );

    }

}
