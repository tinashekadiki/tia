/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboards/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomersComponent } from './components/customers/customers.component';
import { InsurerRoutingModule } from './insurer-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPackageComponent } from './components/packages/add-package/add-package.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PackagesListComponent } from './components/packages/packages-list/packages-list.component';
import { MatInputModule } from '@angular/material/input';
import { PackageDetailsComponent } from './components/packages/package-details/package-details.component';
import { LeadsListComponent } from './components/leads/leads-list/leads-list.component';
import { AddLeadsComponent } from './components/leads/add-leads/add-leads.component';
import { MatMenuModule } from "@angular/material/menu";
import { LeadDetailsComponent } from './components/leads/lead-details/lead-details.component';
import { BranchListComponent } from './components/branches/branch-list/branch-list.component';
import { AddBranchComponent } from './components/branches/add-branch/add-branch.component';
import { BranchDetailsComponent } from './components/branches/branch-details/branch-details.component';
import { FlexModule } from "@angular/flex-layout";
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
import { WelcomeComponentsModule } from "../../../../apps/telone-insurance/src/app/components";
import { MatSortModule } from "@angular/material/sort";
import { InsurerListComponent } from './components/Insurer/insurer-list/insurer-list.component';
import { AddInsurerComponent } from './components/Insurer/add-insurer/add-insurer.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerAssetListComponent } from './pages/customer-assets/customer-asset-list/customer-asset-list.component';
import { CreateCustomerAssetComponent } from './components/customer-asset/create-customer-asset/create-customer-asset.component';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { UpdatePackageComponent } from './components/packages/update-package/update-package.component';
import { UpdateLeadComponent } from './components/leads/update-lead/update-lead.component';
import { AddOnListComponent } from './components/add-on/add-on-list/add-on-list.component';
import { CreateAddOnsComponent } from './components/add-on/create-add-ons/create-add-ons.component';
import { UploadPackageComponent } from './components/packages/upload-package/upload-package.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UploadLogoComponent } from './components/upload-logo/upload-logo.component';
import { TeloneButtonComponent } from '../../../../apps/front-office/src/app/telone-button/telone-button.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { AddOnResolver } from './services/resolver/add-on.resolver';
import { InsurerDetailsComponent } from './components/Insurer/insurer-details/insurer-details.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';

import { InsurerDashboardComponent } from './pages/dashboards/insurer-dashboard/insurer-dashboard.component';
@NgModule({
  imports: [
    NgxPermissionsModule.forRoot(),
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatTabsModule,
    MatStepperModule,
    MatMomentDateModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    InsurerRoutingModule,
    FormsModule, MatMenuModule, FlexModule, WelcomeComponentsModule, MatSortModule, MatDatepickerModule, MatSelectModule
  ],
  declarations: [
    DashboardComponent,
    PackagesListComponent,
    UsersComponent,
    CustomersComponent,
    AddPackageComponent,
    PackagesListComponent,
    PackageDetailsComponent,
    LeadsListComponent,
    AddLeadsComponent,
    LeadDetailsComponent,
    BranchListComponent,
    AddBranchComponent,
    BranchDetailsComponent,
    CompanyProfileComponent,
    InsurerListComponent,
    AddInsurerComponent,
    AddCustomerComponent,
    UpdatePackageComponent,
    CustomerAssetListComponent,
    CreateCustomerAssetComponent,
    UpdateLeadComponent,
    CreateAddOnsComponent,
    AddOnListComponent,
    UploadPackageComponent,
    UploadLogoComponent,
    TeloneButtonComponent,
    TopMenuComponent,
    InsurerDetailsComponent,
    InsurerDashboardComponent,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }, AddOnResolver],
  exports: [
    TeloneButtonComponent
  ]
})
export class InsurerModule { }
