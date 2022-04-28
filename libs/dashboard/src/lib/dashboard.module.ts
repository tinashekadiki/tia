import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeloneDashboardComponent } from './pages/telone-dashboard/telone-dashboard.component';
import { DashboardRoutingModules } from './dashboard.routing.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingModules],
  declarations: [
    TeloneDashboardComponent
  ],
})
export class DashboardModule {}
