import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
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
import { PaymentRoutingModule } from './payment-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPaymentMethod from './+state/payment-method/payment-method.reducer';
// import { PaymentMethodEffects } from './+state/payment-method/payment-method.effects';
import { PaymentMethodFacade } from './+state/payment-method/payment-method.facade';
import { CreatePaymentMethodhComponent } from './components/create-payment-methodh/create-payment-methodh.component';
import { PaymentMethodFormComponent } from './components/payment-method-form/payment-method-form.component';
import { PaymentMethodHeaderComponent } from './components/payment-method-header/payment-method-header.component';
import { PaymentMethodListComponent } from './components/payment-method-list/payment-method-list.component';
import { PaymentMethodPageComponent } from './pages/payment-method-page/payment-method-page.component';
import { PaymentMethodService } from './services/payment-method.service';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCardModule, 
    MatButtonModule,
    
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    PaymentRoutingModule,
    StoreModule.forFeature(
      fromPaymentMethod.PAYMENT_METHOD_FEATURE_KEY,
      fromPaymentMethod.reducer
    ),
    EffectsModule.forFeature([]),
  ],
  declarations: [
    PaymentMethodHeaderComponent,
    PaymentMethodListComponent,
    CreatePaymentMethodhComponent,
    PaymentMethodFormComponent,
    PaymentMethodHeaderComponent,
    PaymentMethodPageComponent,
  
  ],
  exports: [
    PaymentMethodHeaderComponent,
    PaymentMethodListComponent,
    CreatePaymentMethodhComponent,
    PaymentMethodFormComponent,
  ],
  providers: [PaymentMethodFacade, PaymentMethodService],
})
export class PaymentModule {} 
