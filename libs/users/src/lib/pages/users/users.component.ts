import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../../components/add-user/add-user.component';

@Component({
  selector: 'front-application-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  constructor( private dialog: MatDialog) { }
  public backgroundColor = '';

  ngOnInit(): void {
    this.backgroundColor = sessionStorage.getItem('secondaryColor') ?? '';
  }
  showAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {disableClose: true,
      width: '800px'
  });
    dialogRef.afterClosed().subscribe((res) => {

      if (res) {

        this.ngOnInit();
      }
    });
  }

}
