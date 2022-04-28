import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Branch } from '../../../models';
import { BranchService } from '../../../services/branch.service';
import { AddBranchComponent } from '../add-branch/add-branch.component';

@Component({
  selector: 'front-application-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  branches: Branch[] = [];
  displayedColumns: string[] = ['name', 'address', 'phoneNumber', 'action'];
  dataSource = new MatTableDataSource<Branch>(this.branches);
  selection = new SelectionModel<Branch>(true, []);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private branchService: BranchService, private nzNotifications: NzNotificationService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches() {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const insurerId = user.tenantId
    this.branchService.getFromUrl(`/branches/insurer/${insurerId}`).subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
     }
    );
  }

  showAddBranchDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddBranchComponent, {
      width: '800px',
      disableClose: true,
      data:obj
    });
    dialogRef.afterClosed().subscribe((res) => {

      if(res.event == 'Add'){
              this.addRowData(res.data);
            }else if(res.event == 'Update'){
              this.updateRowData(res.data);
            }
    }
    );

  }


  addRowData(row_obj: any){
    console.log('hie')
    // this.dataSource.push({
    //   id:d.getTime(),
    //   name:row_obj.name
    // });
  }
  updateRowData(row_obj: any){
    this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.phoneNumber = row_obj.phoneNumber;
        value.address.addressLine1 = row_obj.address.addressLine1;
        value.address.city= row_obj.address.city;
      }
      return true;
    });
  }

delete(branches: any): void {
    this.branchService.delete(`/branches/${branches.id}`).subscribe(() => {
      this.nzNotifications.success('Deleted', 'Branch Deleted Successfully!', { nzDuration: 10000 }); this.ngOnInit();
    });
  }

}
