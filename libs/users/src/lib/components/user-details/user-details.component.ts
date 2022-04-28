import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UploadLogoComponent } from 'libs/insurer/src/lib/components/upload-logo/upload-logo.component';
import { Group, Users } from '../../models';
import { UsersService } from '../../services/users.service';
import { UpdateUserGroupComponent } from '../update-user-group/update-user-group.component';
import { UpdateUserPermissionsComponent } from '../update-user-permissions/update-user-permissions.component';
import { UpdateUserRolesComponent } from '../update-user-roles/update-user-roles.component';

@Component({
  selector: 'front-application-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: Users;
  permissions: string[];
  roles: string[];
  public profile: any;
  name: string;
  groups: Group[];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private userService: UsersService
  ) {}
  id: string | null;
  userActive = false;
  userBlocked = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService
      .getFromUrl(`/user-accounts/${this.id}`)
      .subscribe((res) => {
        this.user = res;
        this.userActive = res.active;
        this.userBlocked = res.blocked;
        this.permissions = this.user.permissions;
        this.roles = this.user.roles;
        this.groups = this.user.groups;
      });
  }

  updateStatus() {
    this.userActive = !this.userActive;
    console.log('Updating USER', this.userActive);
    this.userService
      .updateToUrl(
        `/user-accounts/${this.id}/active-status?activate=${this.userActive}`,
        {}
      )
      .subscribe((res) => {
        console.log(res);
        this.ngOnInit();
      });
  }

  updateBlockStatus() {
    this.userBlocked = !this.userBlocked;
    this.userService
      .updateToUrl(
        `/user-accounts/${this.id}/blocked-status?block=${this.userBlocked}`,
        {}
      )
      .subscribe((res) => {
        console.log(res);
        this.ngOnInit();
      });
  }

  showUpdatePermissionsDialog() {
    const dialogRef = this.dialog.open(UpdateUserPermissionsComponent, {
      disableClose: true,
      width: '50%',
      data: { id: this.id },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  showUpdateRolesDialog() {
    const dialogRef = this.dialog.open(UpdateUserRolesComponent, {
      disableClose: true,
      width: '50%',
      data: { id: this.id },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  showUpdateGroupDialog() {
    const dialogRef = this.dialog.open(UpdateUserGroupComponent, {
      disableClose: true,
      width: '50%',
      data: { id: this.id },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  openUploadImage(): void {
    const dialogRef = this.dialog.open(UploadLogoComponent, {
      width: '400px',
      disableClose: true,
      data: {
        profile: this.profile
      }
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        location.reload();
      }
    })
  }
}
