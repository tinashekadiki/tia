import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeloneDashboardComponent } from './pages/telone-dashboard/telone-dashboard.component';


const routes: Routes = [
    { path: '', component: TeloneDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModules {
}
