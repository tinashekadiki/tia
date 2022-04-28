import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserGroupsFacade } from '../../+state/user-groups/user-groups.facade';
import { CreateGroupsComponent } from '../../components/create-groups/create-groups.component';

@Component({
  selector: 'front-application-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {

  constructor(public userGroupsFacade: UserGroupsFacade,
                private dialog: MatDialog,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.getUserGroups(0, 10);
    
  }
  refresh(isRefresh: boolean){
   
   return isRefresh? this.ngOnInit():null
  }
  public getUserGroups(page: number, pageSize: number) {
    const filters = { pageNumber: page, pageSize };
    this.userGroupsFacade.getPaginatedUserGroups(filters);
    console.log(filters)
  }


}
