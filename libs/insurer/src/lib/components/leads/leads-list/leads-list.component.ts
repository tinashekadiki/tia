import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Lead } from '../../../models';
import { CustomerService } from '../../../services/customer.service';
import { AddLeadsComponent } from '../add-leads/add-leads.component';
import { UpdateLeadComponent } from '../update-lead/update-lead.component';
import {AddBranchComponent} from "../../branches/add-branch/add-branch.component";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {LeadsService} from "../../../services/leads.service";

@Component({
  selector: 'front-application-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {
  leads: Lead[] = [ ];

  displayedColumns: string[] = ['name','email', 'productId','notes' ,'action'];
  dataSource = new MatTableDataSource<Lead>(this.leads);
  selection = new SelectionModel<Lead>(true, []);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  LeadlistService: any;
  

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
  // masterToggle() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.dataSource.data);
  // }
  // checkboxLabel(row?: Lead): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

  constructor( private leadsService: LeadsService,
               private nzNotificatons: NzNotificationService,
               private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllLeads()
  }



  getAllLeads() {
    const me = sessionStorage.getItem('user');
    const parsedUser = JSON.parse(me ?? '{}');
    this.leadsService.getFromUrl(`/leads/insurer/${parsedUser.tenantId}`).subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;

   }
    );
  }

showAddLeadDialog(action:any,obj:any){
    obj.action=action;
    const dialogRef = this.dialog.open(AddLeadsComponent,
      {
        width: '800px',
        disableClose: true,
        data:obj,
      });
    dialogRef.afterClosed().subscribe((res) => {
      this.getAllLeads()
      if (res.event=='Add') {

        this.addRowData(res.data);

      }else if(res.event=='Update'){
        this.updateRowData(res.data);
      }
    });

   }

  private addRowData(row_obj:any) {

  }

  private updateRowData(row_obj: any) {
    this.dataSource.data.filter((value,key)=>{
      if (value.id== row_obj.id){
        value.name= row_obj.name;
        value.insuranceTypeId= row_obj.insuranceTypeId;
        value.email= row_obj.email;
        value.notes= row_obj.notes;

      }
      return true;
    });

  }

  deleteLead(id: number) {
    this.leadsService.delete(`/leads/${id}`).subscribe({
      next:(res)=>{
        this.nzNotificatons.success('Deleted','Deleted successfully'),
        this.getAllLeads()
      }
    })

  }
}
  
