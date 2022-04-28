import { NgModule } from "@angular/core";
import  {Routes, RouterModule} from "@angular/router"
import { RequestQuoteComponent } from "./components/request-quote/request-quote.component";
import {AgentListComponent} from "./pages/agent-list/agent-list.component";
import {AgentDashboardComponent} from "./pages/agent-dashboard/agent-dashboard.component";


const routes : Routes = [
    {
        path : 'purchase',
        component : RequestQuoteComponent
    },
  {
    path : '',
    component : AgentDashboardComponent
  },
    {
      path : 'agent-list',
      component : AgentListComponent
    }
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AgentRoutingModule{

}
