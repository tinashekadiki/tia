import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserGroups } from '../../models';
import { User } from '../../models/users';
import { UserGroupService } from '../../services/user-group.service';
import { AddRolesComponent } from '../add-roles/add-roles.component';
import { UpdateGroupUsersComponent } from '../update-group-users/update-group-users.component';
import { UpdateGroupComponent } from '../update-group/update-group.component';

@Component({
  selector: 'front-application-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss'],
})
export class GroupDetailsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  group: UserGroups;
  permissions: string[];
  roles: string[];
  users: User[];
  pageIndex = 1;
  pageSize = 2;
  total = 1;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private userGroupService: UserGroupService
  ) {}
  id: string | null;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userGroupService.getFromUrl(`/groups/${this.id}`).subscribe((res) => {
      
      this.group = res;
      this.permissions = this.group.permissions;
      this.roles = this.group.roles;
      this.users = this.group.users;
    });
  }
  load(id: number, _$event?: number) {
    this.userGroupService.getFromUrl(`/groups/${id}`).subscribe((res) => {
      console.log(res.content);
    });
  }
  showUpdatePermissionDialog() {
    const dialogRef = this.dialog.open(UpdateGroupComponent, {
      width: '400px',
      disableClose: true,
      data: { id: this.id },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
  showAddUserDialog() {
    const dialogRef = this.dialog.open(UpdateGroupUsersComponent, {
      width: '400px',
      disableClose: true,
      data: { id: this.id },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
  showAddRoleDialog() {
    const dialogRef = this.dialog.open(AddRolesComponent, {
      width: '400px',
      disableClose: true,
      data: { id: this.id },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
}
