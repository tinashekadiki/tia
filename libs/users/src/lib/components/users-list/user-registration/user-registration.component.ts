import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Users } from '../../../models';
import { UserSignupService } from '../../../services/user-signups.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'front-application-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  columnsToDisplay = ['name', 'email','active','status','action'];
  dataSource: MatTableDataSource<Users>;
  // @ViewChild('sort') sort: MatSort;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor( private userService: UserSignupService, private nzNotification: NzNotificationService
  ) { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();
    this.load(false)
  }
  load(reload: boolean, _$event?: number) {
    this.userService.getFromUrl('/user-sign-ups?confirmedEmail=false').subscribe(res => {
      this.dataSource.data = res.content;
    }
    );
  }
  resend(user: any) {
  this.userService.postToUrl(`/user-sign-ups/confirmation?redirectUri=http://192.168.10.91:8081/auth/login&username=${user.username}`, null)
        .subscribe(() => this.nzNotification.success('Success', `Message resent`));
    }

  }
