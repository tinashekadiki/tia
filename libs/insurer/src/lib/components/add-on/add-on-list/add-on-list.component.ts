import { Component, Input, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AddOn } from '../../../models';
import { AddOnService } from '../../../services';
import { CreateAddOnsComponent } from '../create-add-ons/create-add-ons.component';

@Component({
  selector: 'front-application-add-on-list',
  templateUrl: './add-on-list.component.html',
  styleUrls: ['./add-on-list.component.scss']
})
export class AddOnListComponent implements OnInit {
  data :AddOn[] = [ ];
  displayedColumns: string[] = ['name', 'description', 'value', 'action'];
  dataSource = new MatTableDataSource(this.data);
  id: number;
  @Input() addOn: AddOn;

  constructor(private service: AddOnService,
    private nzNotifications: NzNotificationService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAddOn()
  }

  showAddInsurerDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(CreateAddOnsComponent, {
      width: '800px',
      disableClose: true,
      data:obj
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAddOn();
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
        value.name = row_obj.name;
        value.description = row_obj.description;
        value.value = row_obj.value;
      }
      return true;
    });
  }


  getAddOn() {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
const insurerId = user.tenantId
    this.service.getFromUrl(`/addon/insurer/${insurerId}/all`).subscribe(
      result => this.dataSource = result)
  }

  
  delete(addon: any): void {
    this.service.delete(`/addon/${addon.id}`).subscribe(() => {
      this.nzNotifications.success('Deleted', 'Addon Deleted Successfully!', { nzDuration: 10000 }); this.ngOnInit();
    });
  }
}
