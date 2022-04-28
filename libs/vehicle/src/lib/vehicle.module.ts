import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'vehicle-list', pathMatch: 'full', component: VehicleListComponent} 
    ]),
   
    MatDividerModule,],
  declarations: [
    VehicleComponent,
    VehicleListComponent 
  ],
  exports:[
    VehicleListComponent,
  ]
})
export class VehicleModule {}
