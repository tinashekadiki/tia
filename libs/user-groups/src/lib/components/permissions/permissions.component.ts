import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Permissions } from '../../models';
import { PermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'front-application-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  columnsToDisplay = ['name'];
  dataSource: MatTableDataSource<Permissions>;
  constructor( private permissionsService: PermissionsService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.load(false);
   
  }
  load(reload: boolean, _$event?: number) {
    this.permissionsService.getFromUrl('/permissions').subscribe(res => {
      this.dataSource.data = res;
      
    }
    );
  }

}
