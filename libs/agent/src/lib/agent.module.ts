import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestQuoteComponent } from './components/request-quote/request-quote.component';
import { AgentRoutingModule } from './agent-routing.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { AgentListComponent } from './pages/agent-list/agent-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from "@angular/material/expansion";
import {FlexModule} from "@angular/flex-layout";
import { BuyComponent } from './components/buy/buy.component';
import { MatTableModule} from "@angular/material/table";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatDividerModule } from '@angular/material/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AgentDashboardComponent } from './pages/agent-dashboard/agent-dashboard.component';

@NgModule({
  imports: [
    CommonModule, 
    NzTagModule,
    AgentRoutingModule, 
    MatInputModule, 
    FormsModule, 
    MatDividerModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule, MatButtonModule, MatSlideToggleModule, MatExpansionModule, FlexModule, MatTableModule, MatPaginatorModule],
  declarations: [
    RequestQuoteComponent,
    AgentListComponent,
    AddAgentComponent,
    BuyComponent,
    AgentDashboardComponent
  ],
  exports: [
    RequestQuoteComponent
  ],
})
export class AgentModule {}
