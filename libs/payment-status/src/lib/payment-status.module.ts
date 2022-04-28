import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@Injectable({
  providedIn: 'root' // It will inject this provider at the root level of the application so it can be accessed anywhere.
})

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: 'transactions', pathMatch: 'full', component: TransactionsComponent },

    ]),
  ],
  declarations: [
    TransactionsComponent,
    TransactionsListComponent
  ],
})
export class PaymentStatusModule { }
