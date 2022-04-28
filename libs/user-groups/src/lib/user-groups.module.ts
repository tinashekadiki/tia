import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGroupsComponent } from './pages/user-groups/user-groups.component';
import { UserGroupsListComponent } from './components/user-groups-list/user-groups-list.component';
import { UserGroupsFormComponent } from './components/user-groups-form/user-groups-form.component';

import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUserGroups from './+state/user-groups/user-groups.reducer';
import { UserGroupsEffects } from './+state/user-groups/user-groups.effects';
import { UserGroupsFacade } from './+state/user-groups/user-groups.facade';
import { UserGroupService } from './services/user-group.service';
import { UserGroupsRoutingModule } from './user-group-routing.module';
import { CreateGroupsComponent } from './components/create-groups/create-groups.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { MatIconModule } from '@angular/material/icon';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { UpdateGroupUsersComponent } from './components/update-group-users/update-group-users.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import {InsurerModule} from "@front-application/insurer";
import { GroupTopMenuComponent } from './components/group-top-menu/group-top-menu.component';
@NgModule({
    imports: [
        CommonModule,
        MatSlideToggleModule,
        MatTableModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
        NzTableModule,
        NzPaginationModule,
        NgxPermissionsModule.forChild({
            permissionsIsolate: true,
            rolesIsolate: true
        }),

        UserGroupsRoutingModule,
        MatDialogModule,
        StoreModule.forFeature(
            fromUserGroups.USER_GROUPS_FEATURE_KEY,
            fromUserGroups.reducer
        ),
        EffectsModule.forFeature([UserGroupsEffects]),
        InsurerModule,
    ],
  declarations: [
    UserGroupsComponent,
    UserGroupsListComponent,
    UserGroupsFormComponent,
    CreateGroupsComponent,
    PermissionsComponent,
    GroupDetailsComponent,
    UpdateGroupComponent,
    UpdateGroupUsersComponent,
    AddRolesComponent,
    GroupTopMenuComponent,

  ],
  providers: [UserGroupsFacade, UserGroupService],
})

export class UserGroupsModule {}
