import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {MatDialog} from "@angular/material/dialog";
import {UploadLogoComponent} from "../../components/upload-logo/upload-logo.component";
import { UsersService } from 'libs/users/src/lib/services/users.service';
import {InsurerService} from "@front-application/insurer";

@Component({
  selector: 'front-application-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.sass']
})
export class CompanyProfileComponent implements OnInit {
  public profile: any;
  public userAccount: any;
  user: any;
  insurerId: any;

  constructor(private customerService: CustomerService,
    private insurerService: InsurerService,
    private userService: UsersService,  private dialog: MatDialog) {
  }

  ngOnInit(): void {
     this.userService.getFromUrl('/user-accounts/me').subscribe((res) => {
          this.user = res;
          const insurerId = this.user.tenantId;
          this.insurerService.getFromUrl(`/insurers/${insurerId}`).subscribe(res => {
            this.profile = res;
          }
        );
        })
    // const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    // const insurerId = user.tenantId

  }

  onClick() {
    console.log('Edit');
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
