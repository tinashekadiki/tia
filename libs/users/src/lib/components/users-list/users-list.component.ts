import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Users } from '../../models';
import { UserSignupService } from '../../services/user-signups.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'front-application-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  columnsToDisplay: string[] = ['name', 'email', 'active', 'status', 'action'];
  dataSource: MatTableDataSource<Users>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private userService: UserSignupService, private nzNotification: NzNotificationService
  ) { }



  ngOnInit() {
    this.userService.getFromUrl('/user-accounts').subscribe(res => {
      this.dataSource = new MatTableDataSource(res.content);
      this.dataSource.paginator = this.paginator;
    })
  }


}

