import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { Group, Users } from '../../../models';
import { UsersService } from '../../../services/users.service';
import { UpdateDetailsComponent } from '../update-details/update-details.component';
import { UpdatePasswordComponent } from '../update-password/update-password.component';

@Component({
  selector: 'front-application-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  user: Users;
  dataSource: MatTableDataSource<Users>
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  display = false;
  lowValue = 8;
  highValue = 30;
  
  constructor(private dialog: MatDialog,
              private userService: UsersService) {}

  userActive = false;
  userBlocked = false;
  permissions: string[];
  roles: string[];
  groups: Group[];
  obs: Observable<any>;

  ngOnInit(): void {
    this.userService.getFromUrl('/user-accounts/me').subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;

      this.user = res;
      this.userActive = res.active;
      this.userBlocked = res.blocked;
      this.permissions = this.user.permissions;
      this.roles = this.user.roles;
      this.groups = this.user.groups;

      });
  }
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
  showUpdatePasswordDialog() {
    const dialogRef = this.dialog.open(UpdatePasswordComponent, {disableClose: true,
      width: '800px'
  });
    dialogRef.afterClosed().subscribe((res) => {
      
      if (res) {
       
        this.ngOnInit();
      }
    });
  }
  showUpdateDetailsDialog() {
    const dialogRef = this.dialog.open(UpdateDetailsComponent, {disableClose: true,
      width: '800px'
  });
    dialogRef.afterClosed().subscribe((res) => {
      
      if (res) {
       
        this.ngOnInit();
      }
    });
  }
}
