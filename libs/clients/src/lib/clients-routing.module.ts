import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ClientsDashboardComponent} from "./pages/clients-dashboard/clients-dashboard.component";
import {InsuranceResultsComponent} from "./pages/insurance-results/insurance-results.component";
import {InsuranceTypesComponent} from "./pages/insurance-types/insurance-types.component";
import {PaymentHistoryComponent} from "./pages/payment-history/payment-history.component";
import {TransactionHistoryComponent} from "./pages/transaction-history/transaction-history.component";
import {RegisteredVehiclesComponent} from "./pages/registered-vehicles/registered-vehicles.component";
import {InsurersComponent} from "./pages/insurers/insurers.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {InsuranceOrderComponent} from "./pages/insurance-order/insurance-order.component";
import {PaymentStatusComponent} from "./pages/payment-status/payment-status.component";
import {PaymentComponent} from "./pages/payment/payment.component";
import {DiaryOptionsComponent} from "./pages/diary-options/diary-options.component";
import {AddAssetComponent} from "./pages/add-asset/add-asset.component";
import {GetAQuoteComponent} from "./pages/get-a-quote/get-a-quote.component";
import {ReceiptComponent} from "./pages/receipt/receipt.component";
import {CollectionComponent} from "./pages/collection/collection.component";
import {PaymentProceedComponent} from "./pages/payment-proceed/payment-proceed.component";
import {AddDetailsComponent} from "./pages/add-details/add-details.component";
import {AddPropertyComponent} from "./pages/add-property/add-property.component";
import {AddVehicleComponent} from "./pages/add-vehicle/add-vehicle.component";
import {CartComponent} from "./pages/cart/cart.component";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  CustomerContainerComponent
} from "../../../layouts/src/lib/components/customer-container/customer-container.component";

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {
    path: '',
    component: CustomerContainerComponent,
    children: [
      {path: 'collection', component: CollectionComponent},
      {path: 'quote/:productId', component: GetAQuoteComponent},
      {path: '', component: InsuranceTypesComponent},
      {path: 'history', component: TransactionHistoryComponent},
      {path: 'insurers/:productId', component: InsurersComponent},
      {path: 'payment-history', component: PaymentHistoryComponent},
      {path: 'receipt', component: ReceiptComponent},
      {path: 'diary', component: DiaryOptionsComponent},
      {path: 'add-asset', component: AddAssetComponent},
      {path: 'add-property', component: AddPropertyComponent},
      {path: 'add-vehicle', component: AddVehicleComponent},
      {path: 'registered-vehicles', component: RegisteredVehiclesComponent},
      {path: 'insurance-results/:productId/:insurerId', component: InsuranceResultsComponent},
      {path: 'orders/:productId/:insurerId/:insurerTypeId', component: OrdersComponent},
      {path: 'insurance-results', component: InsuranceResultsComponent},
      {path: 'insurance-order/:productId/:insurerId/:insuranceTypeId', component: InsuranceOrderComponent},
      {path: 'payment-status/:orderNumber', component: PaymentStatusComponent},
      {path: 'create-payment', component: PaymentComponent},
      {path: '**', redirectTo: 'dashboard'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class ClientsRoutingModule {

}
