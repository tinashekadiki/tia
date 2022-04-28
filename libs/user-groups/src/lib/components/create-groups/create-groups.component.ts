import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserGroupsFacade } from '../../+state/user-groups/user-groups.facade';
import { UserGroups } from '../../models';

@Component({
  selector: 'front-application-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrls: ['./create-groups.component.scss']
})
export class CreateGroupsComponent implements OnInit {

  userGroups!: UserGroups;

  public loadedSubscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<CreateGroupsComponent>,
    public userGroupsFacade: UserGroupsFacade,
  ) {}

  ngOnInit(): void {
    this.userGroupsFacade.loadUserGroups();
  }

  createUserGroups(userGroups: UserGroups) {
    this.userGroupsFacade.createNewUserGroups(userGroups);
    this.loadedSubscription = this.userGroupsFacade.loaded$.subscribe((res) =>
      res ? this.dialogRef.close(true) : null
     
    );
   
  }

  ngOnDestroy() {
    this.loadedSubscription.unsubscribe();
  }

}
