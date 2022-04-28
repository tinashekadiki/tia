import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HTTPListener } from '@front-application/core';
import { UsersService } from 'libs/users/src/lib/services/users.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Package } from '../../../models';
import { InsurerService, PackageService } from '../../../services';
import { AddPackageComponent } from '../add-package/add-package.component';
import { UpdatePackageComponent } from '../update-package/update-package.component';
import { UploadPackageComponent } from '../upload-package/upload-package.component';
import {saveAs} from "@progress/kendo-file-saver";
import {HttpClient} from "@angular/common/http";
export interface Packi {
  id: number;
  productType: string;
}
@Component({
  selector: 'front-application-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.scss'],
})
export class PackagesListComponent implements OnInit {
  packages: Package[] = [];

  displayedColumns: string[] = ['motorInsurancePackages', 'isRenewal', 'zwlPrice', 'action'];
  dataSource = new MatTableDataSource<Package>(this.packages);
  selection = new SelectionModel<Package>(true, []);
  pack: Array<Packi> = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  id: string | null;
  public error: any;
  alert: any;
  user: any;
  insurerId: any

  // public searchPackage(key: string): void {
  //   const results: Package[] = [];
  //   for (const pack of this.packages) {
  //     if (
  //       pack.packageCode.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
  //       pack.productCode.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
  //       pack.insuranceTypeId.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     ) {
  //       results.push(pack);
  //     }
  //   }
  //   this.packages = results;
  //   if (results.length === 0 || !key) {
  //     this.AllPackages(true);
  //   }
  // }
  constructor(private userService: UsersService,
    private packageService: PackageService,
    private notification: NzNotificationService,
    private dialog: MatDialog,
    private errorHandler: HTTPListener,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.allPackages();

  }

 // getPackage getPackage() {
 //    this.userService.getFromUrl('/user-accounts/me').subscribe((res) => {
 //      this.user = res;
 //      const insurerId = this.user.tenantId;
 //    this.userService.getFromUrl(`/addon/insurer/${insurerId}/all`).subscribe(
 //      result => this.dataSource = result)
 //  }
 //    )}

  allPackages() {
    this.userService.getFromUrl('/user-accounts/me').subscribe((res) => {
    this.user = res;
    const insurerId = this.user.tenantId;
    this.packageService.getFromUrl(`/motor-vehicle-quotations/${insurerId}`)
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource(res);
        console.log(this.dataSource)
        this.dataSource.paginator = this.paginator;
       },

      );
  }
    )}
  showAddPackageDialog() {
    const dialogRef = this.dialog.open(AddPackageComponent, {
      width: '800px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.allPackages();
      }
    });
  }
  showUploadPackageDialog() {
    const dialogRef = this.dialog.open(UploadPackageComponent, {
      width: '800px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.allPackages();
      }
    });
  }
  showUpdatePackageDialog(res: Package) {
    const dialogRef = this.dialog.open(UpdatePackageComponent, {
      width: '800px',
      disableClose: true,
      data: res,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.allPackages();
      }
    });
  }

  downloadTemplate() {
    const link = document.createElement("a");
    link.setAttribute('download', 'nhasi.xlsx');
    link.download = "Sample-quotations-file.csv";
    link.href = "../../../../../../../apps/front-office/src/assets/sample-quotations-file_new.csv";
    document.body.appendChild(link);
    link.click();

  }

  showUpdateDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(UpdatePackageComponent, {
      width: '800px',
      disableClose: true,
      data:obj
    });
    dialogRef.afterClosed().subscribe(result => {

      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }
    });
  }

  addRowData(row_obj: any){
    console.log('hie')
  }
  updateRowData(row_obj: any){
    this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.motorInsurancePackage = row_obj.motorInsurancePackage;
        value.isRenewal = row_obj.isRenewal;
        value.zwlPrice = row_obj.zwlPrice;
      }
      return true;
    });
  }


}


