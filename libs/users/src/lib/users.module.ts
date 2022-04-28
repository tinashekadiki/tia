import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './+state/users/users.reducer';
import { UsersEffects } from './+state/users/users.effects';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatIconModule } from '@angular/material/icon';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { UpdateUserGroupComponent } from './components/update-user-group/update-user-group.component';
import { UpdateUserPermissionsComponent } from './components/update-user-permissions/update-user-permissions.component';
import { UpdateUserRolesComponent } from './components/update-user-roles/update-user-roles.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ViewProfileComponent } from './components/user-profile/view-profile/view-profile.component';
import { UpdatePasswordComponent } from './components/user-profile/update-password/update-password.component';
import { UpdateDetailsComponent } from './components/user-profile/update-details/update-details.component';
import { UpdatePhonenumberComponent } from './components/user-profile/update-phonenumber/update-phonenumber.component';
import { UpdateEmailComponent } from './components/user-profile/update-email/update-email.component';
import { UpdateNamesComponent } from './components/user-profile/update-names/update-names.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NzTagModule } from 'ng-zorro-antd/tag';
import {MatMenuModule} from '@angular/material/menu';
import { UserRegistrationComponent } from './components/users-list/user-registration/user-registration.component';
import {InsurerModule} from "@front-application/insurer";

@NgModule({
    imports: [
        MatSlideToggleModule,
        CommonModule,
        MatMenuModule,
        MatGridListModule,
        NzTagModule,
        UsersRoutingModule,
        MatTableModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        MatChipsModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatListModule,
        MatChipsModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatDividerModule,
        StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
        EffectsModule.forFeature([UsersEffects]),
        InsurerModule,

    ],
  declarations: [UsersComponent, UsersListComponent,
    AddUserComponent, UserDetailsComponent, UpdateUserGroupComponent,
    UpdateUserPermissionsComponent, UpdateUserRolesComponent, ViewProfileComponent, UpdatePasswordComponent, UpdateDetailsComponent, UpdatePhonenumberComponent, UpdateEmailComponent, UpdateNamesComponent, UserRegistrationComponent],
})
export class UsersModule {}
