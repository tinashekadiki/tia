import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PERMISSIONS } from '@front-application/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserGroups } from '../../models/user-groups';
import { UserGroupService } from '../../services/user-group.service';
import { CreateGroupsComponent } from '../create-groups/create-groups.component';

@Component({
  selector: 'front-application-user-groups-list',
  templateUrl: './user-groups-list.component.html',
  styleUrls: ['./user-groups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserGroupsListComponent implements OnInit {
  groups: UserGroups;
  usergroups:UserGroups[] =[];
  columnsToDisplay: string[] = ['name', 'description','action'];
  dataSource= new MatTableDataSource<UserGroups>(this.usergroups);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  permissions = PERMISSIONS;


  constructor( private userGroupService: UserGroupService,
              private nzNotificatons: NzNotificationService,
              private dialog: MatDialog,
              ) { }
              

  ngOnInit(): void {
    this.loadGroups();
     }
  loadGroups() {
    this.userGroupService.getFromUrl('/groups').subscribe(res => {
      this.dataSource = new MatTableDataSource(res.content);
      this.dataSource.paginator = this.paginator;
   }
    );  }


  deleteUserGroup(id:number){
    this.userGroupService.delete(`/groups/${id}`).subscribe(res=>{
      this.nzNotificatons.success('Deleted','Deleted Successfully')
      this.loadGroups();

    })
  }
  showAddGroupDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(CreateGroupsComponent,
      {
        width: '800px',
        disableClose: true,
        data:obj
      });
    dialogRef.afterClosed().subscribe((result) => {
      
      if(result.event == 'Add'){
              this.addRowData(result.data);
          }else if(result.event == 'Update'){
              this.updateRowData(result.data);
             }
    });
  }
 
  updateRowData(row_obj: any){
    this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.description = row_obj.description;
        
      }
      return true;
    });
  }
  addRowData(row_obj: any){
       console.log('hie')
     }
  // showAddInsurerDialog(action: any,obj: any) {
  //   obj.action = action;
  //   const dialogRef = this.dialog.open(CreateAddOnsComponent, {
  //     width: '800px',
  //     disableClose: true,
  //     data:obj
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.getAddOn();
  //     if(result.event == 'Add'){
  //       this.addRowData(result.data);
  //     }else if(result.event == 'Update'){
  //       this.updateRowData(result.data);
  //     }
  //   });
  // }
  // addRowData(row_obj: any){
  //   console.log('hie')
  // }
  // updateRowData(row_obj: any){
  //   this.dataSource.data.filter((value,key)=>{
  //     if(value.id == row_obj.id){
  //       value.name = row_obj.name;
  //       value.description = row_obj.description;
  //       value.value = row_obj.value;
  //     }
  //     return true;
  //   });
  // }
  

} 
