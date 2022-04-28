import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentMethodFormComponent } from './components/payment-method-form/payment-method-form.component';
import { PaymentMethodPageComponent } from './pages/payment-method-page/payment-method-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    component: PaymentMethodPageComponent,
    // path: 'payment-method', component: PaymentMethodPageComponent
    
},

{path: 'payment/:id', component: PaymentMethodFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { 
}
