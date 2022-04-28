import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchDetailsComponent } from './components/branches/branch-details/branch-details.component';
import { BranchListComponent } from './components/branches/branch-list/branch-list.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';

import { CustomersComponent } from './components/customers/customers.component';
import { InsurerListComponent } from './components/Insurer/insurer-list/insurer-list.component';
import { LeadDetailsComponent } from './components/leads/lead-details/lead-details.component';
import { LeadsListComponent } from './components/leads/leads-list/leads-list.component';
import { PackageDetailsComponent } from './components/packages/package-details/package-details.component';
import { PackagesListComponent } from './components/packages/packages-list/packages-list.component';
import {DashboardComponent} from "./pages/dashboards/dashboard.component";
import {CompanyProfileComponent} from "./pages/company-profile/company-profile.component";
import { CustomerAssetListComponent } from './pages/customer-assets/customer-asset-list/customer-asset-list.component';
import { AddOnListComponent } from './components/add-on/add-on-list/add-on-list.component';
import { CreateAddOnsComponent } from './components/add-on/create-add-ons/create-add-ons.component';
import { AddOnResolver } from './services/resolver/add-on.resolver';
import { InsurerDetailsComponent } from './components/Insurer/insurer-details/insurer-details.component';
import {InsurerDashboardComponent} from "./pages/dashboards/insurer-dashboard/insurer-dashboard.component";

const routes: Routes = [
  {path: 'add-on', component: AddOnListComponent},
  {path: 'add-on/:id', component: CreateAddOnsComponent },
  {path: '', component: InsurerDashboardComponent},
  // {path: 'tel-dashboard', component: DashboardComponent},
  {path: 'customers',component: CustomersComponent },
  {path: 'company-profile',component: CompanyProfileComponent},
  {path: 'customer/:id',component: CustomerDetailsComponent},
  {path: 'package/:id',component: PackageDetailsComponent},
  {path: 'packages-list',component: PackagesListComponent},
  {path: 'leads', component: LeadsListComponent},
  {path: 'lead/:id',component:LeadDetailsComponent},
  {path: 'branches',component:BranchListComponent},
  {path: 'branch/:id',component: BranchDetailsComponent},
  {path: 'list',component: InsurerListComponent},
  {path: 'list/:id',component: InsurerDetailsComponent},
  {path: 'customer-asset',component: CustomerAssetListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurerRoutingModule {}
