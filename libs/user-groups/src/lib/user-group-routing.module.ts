import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { UserGroupsListComponent } from './components/user-groups-list/user-groups-list.component';
import { UserGroupsComponent } from './pages/user-groups/user-groups.component';

const routes: Routes = [

  {
    
    path: '',
    component: UserGroupsListComponent,
  },
  {
    path: 'groups/:id',
    component: GroupDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserGroupsRoutingModule {}
