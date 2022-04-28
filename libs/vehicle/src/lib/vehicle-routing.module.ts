import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';


const routes: Routes = [
  { path: '', component: VehicleComponent,
  children:[
    {path : 'vehicleList', component: VehicleListComponent}

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { 
}
