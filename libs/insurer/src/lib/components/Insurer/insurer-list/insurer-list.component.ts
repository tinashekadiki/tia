import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {InsurerService} from '@front-application/insurer';
import {MatTableDataSource} from '@angular/material/table';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {AddInsurerComponent} from '@front-application/insurer';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Insurer } from '../../../models';
import {InsurerDetailsComponent} from "../insurer-details/insurer-details.component";
import {stubTrue} from "lodash";
import {InsurersService} from "../../../services/insurers.service";

@Component({
  selector: 'front-application-insurer-list',
  templateUrl: './insurer-list.component.html',
  styleUrls: ['./insurer-list.component.scss']
})
export class InsurerListComponent implements OnInit {
  columnsToDisplay: string[] = ['name', 'address', 'phoneNumber', 'city', 'action'];
  dataSource: MatTableDataSource<Insurer>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private insurerService: InsurerService,
              private insurer:InsurersService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getInsurers();
      }

  showAddInsurerDialog(action: any, obj: any) {
    obj.action= action;
    const dialogRef = this.dialog.open(AddInsurerComponent, {
      width: '800px',
      disableClose: true,
      data:obj
    });
    dialogRef.afterClosed().subscribe((res) => {

      if (res.event=='Add'){
        this.addRowdata(res.data);
      } else if (res.event=='Update'){
        this.updateRowData(res.data);
      }
    });
  }

  getInsurers() {
    this.insurerService.getFromUrl('/insurers').subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
        })
  }

  private addRowdata(row_obj:any) {
//

  }

  private updateRowData(row_obj:any) {
    this.dataSource.data.filter((value, key)=>{
      if (value.id== row_obj.id){
        value.companyProfile.name= row_obj.companyName;
        value.companyProfile.addressLine1 = row_obj.addressLine1;
        value.companyProfile.addressLine2 = row_obj.addressLine2;
        value.companyProfile.addressLine3= row_obj.addressLine3;
        value.admin.email = row_obj.adminEmail;
        value.admin.phoneNumber =row_obj.adminPhoneNumber;
        value.admin.username= row_obj.adminUsername;
        value.companyProfile.email = row_obj.companyEmail;
        value.companyProfile.logoUrl = row_obj.companyLogoUrl;
        value.companyProfile.phoneNumber= row_obj.companyPhoneNumber;
        value.companyProfile.contactPerson.email= row_obj.contactPersonEmail;
        value.companyProfile.contactPerson.firstName= row_obj.contactPersonFirstName;
        value.companyProfile.contactPerson.lastName=row_obj.contactPersonLastName;
        value.companyProfile.contactPerson.phoneNumber= row_obj.contactPersonPhoneNumber;
        value.primaryColor = row_obj.primaryColor;
        value.secondaryColor =row_obj.secondaryColor;
      }
      return true;
    });

  }

  showInsurerDetails(obj: any) {
    const dialogRef = this.dialog.open(InsurerDetailsComponent,{
      width:'800px',
      disableClose:true,
      data:obj
    })

  }
}
