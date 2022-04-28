import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {ClientsDashboardComponent} from './pages/clients-dashboard/clients-dashboard.component';
import {ClientsRoutingModule} from './clients-routing.module';

import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {InsuranceTypesComponent} from './pages/insurance-types/insurance-types.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromProducts from './+state/insurance-types/products.reducer';
import {ProductsEffects} from './+state/insurance-types/products.effects';
import {TransactionHistoryComponent} from './pages/transaction-history/transaction-history.component';
import {RegisteredVehiclesComponent} from './pages/registered-vehicles/registered-vehicles.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import * as fromVehicleDataAccess from './+state/vehicle-data-access/vehicle-data-access.reducer';
import {VehicleDataAccessEffects} from './+state/vehicle-data-access/vehicle-data-access.effects';
import {VehicleDataAccessFacade} from './+state/vehicle-data-access/vehicle-data-access.facade';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {WelcomeComponentsModule} from 'apps/telone-insurance/src/app/components/welcome-components.module';
import {InsuranceResultsComponent} from './pages/insurance-results/insurance-results.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {PaymentHistoryComponent} from './pages/payment-history/payment-history.component';
import {PaymentHistoryHeaderComponent} from './components/payment-history-header/payment-history-header.component';
import {PaymentHistoryListComponent} from './components/payment-history-list/payment-history-list.component';
import {InsurersComponent} from './pages/insurers/insurers.component';
import * as fromInsurer from './+state/insurer/insurer.reducer';
import {InsurerEffects} from './+state/insurer/insurer.effects';
import {InsurerFacade} from './+state/insurer/insurer.facade';
import {OrdersComponent} from './pages/orders/orders.component';
import * as fromPackages from './+state/packages/packages.reducer';
import {PackagesEffects} from './+state/packages/packages.effects';
import {PackagesFacade} from './+state/packages/packages.facade';
import {InsuranceOrderComponent} from './pages/insurance-order/insurance-order.component';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {PaymentStatusComponent} from './pages/payment-status/payment-status.component';
import {PaymentComponent} from './pages/payment/payment.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DiaryOptionsComponent} from './pages/diary-options/diary-options.component';
import {AddAssetComponent} from './pages/add-asset/add-asset.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {GetAQuoteComponent} from './pages/get-a-quote/get-a-quote.component';
import {MatRadioModule} from '@angular/material/radio';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CollectionComponent } from './pages/collection/collection.component';
import { PaymentProceedComponent } from './pages/payment-proceed/payment-proceed.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { AddDetailsComponent } from './pages/add-details/add-details.component';
import { AddVehicleComponent } from './pages/add-vehicle/add-vehicle.component';
import { AddPropertyComponent } from './pages/add-property/add-property.component';
// import { CustomerContainerComponent } from "../../../layouts/src/lib/components/customer-container/customer-container.component";

// import { CustomerContainerComponent } from '../../../layouts/src/lib/components/customer-container/customer-container.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import {CartComponent} from './pages/cart/cart.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from "@angular/material/menu";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ClientHeaderComponent} from "../../../layouts/src/lib/components/client-header/client-header.component";


export const clientsRoutes: Route[] = [];

@NgModule({
  imports: [
    MatIconModule,
    MatBadgeModule,
    MatSliderModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatCardModule,
    MatListModule,
    MatListModule,
    MatTabsModule,
    CommonModule,
    MatTableModule,
    RouterModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    ClientsRoutingModule,
    WelcomeComponentsModule,
    FlexModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatExpansionModule,
    NgxExtendedPdfViewerModule,
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
    StoreModule.forFeature(
      fromVehicleDataAccess.VEHICLE_DATA_ACCESS_FEATURE_KEY,
      fromVehicleDataAccess.reducer
    ),
    EffectsModule.forFeature([VehicleDataAccessEffects]),
    StoreModule.forFeature(
      fromInsurer.INSURER_FEATURE_KEY,
      fromInsurer.reducer
    ),
    EffectsModule.forFeature([InsurerEffects]),
    StoreModule.forFeature(
      fromPackages.PACKAGES_FEATURE_KEY,
      fromPackages.reducer
    ),
    EffectsModule.forFeature([PackagesEffects]),
    StoreModule.forFeature(
      fromPackages.PACKAGES_FEATURE_KEY,
      fromPackages.reducer
    ),
    MatMenuModule,
  ],
  declarations: [
    ClientHeaderComponent,
    ClientsDashboardComponent,
    InsuranceTypesComponent,
    TransactionHistoryComponent,
    RegisteredVehiclesComponent,
    InsuranceResultsComponent,
    PaymentHistoryComponent,
    PaymentHistoryHeaderComponent,
    PaymentHistoryListComponent,
    InsurersComponent,
    OrdersComponent,
    InsuranceOrderComponent,
    PaymentStatusComponent,
    PaymentComponent,
    DiaryOptionsComponent,
    AddAssetComponent,
    GetAQuoteComponent,
    ReceiptComponent,
    CollectionComponent,
    PaymentProceedComponent,
    PaymentMethodComponent,
    AddDetailsComponent,
    AddVehicleComponent,
    AddPropertyComponent,
    CartComponent,
    BuyNowComponent
  ],
  providers: [VehicleDataAccessFacade, InsurerFacade, PackagesFacade],
  exports: [
    ClientHeaderComponent
  ]
})
export class ClientsModule {
}
