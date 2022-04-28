import { Component, OnInit } from '@angular/core';
import {InsurerService} from "@front-application/insurer";
import {AgentService} from "../../../../../../agent/src/lib/services/agent.service";
import {OrderService} from "../../../services/order.service";
import {DashboardService} from "../../../services/dashboard.service";

@Component({
  selector: 'front-application-insurer-dashboard',
  templateUrl: './insurer-dashboard.component.html',
  styleUrls: ['./insurer-dashboard.component.scss']
})
export class InsurerDashboardComponent implements OnInit {
  numberOfInsurers: any;
  numberOfAgents: any;
  activeAgents: number;
  inActiveAgents: number;
  numberOfOrders: number;
  pendingOrders: number;
  completedOrders: number;
  pending='INITIATED';
  completed = 'PAIDFOR';
  numberOfCustomers: any;
  totalSales: any;
  constructor(
    private  insurerService: InsurerService,
    private agentService: AgentService,
    private orderService: OrderService,
  private dashboardService: DashboardService

  ) { }

  ngOnInit(): void {

    this.getInsurers();
    this.getIncompleteOrders();
    this.getNumberOfCustomers();
    this.getTotalSales();
  }
  getInsurers(){
    this.insurerService.getFromUrl('/insurers').subscribe({
      next: (res)=>{
        this.numberOfInsurers = res.length

      }
    })
  }
  getAgents(){
    this.agentService.getFromUrl('/service-agents/all').subscribe({
      next:(res)=>{
        this.numberOfAgents =res.length
        this.activeAgents = res.filter((el: any) => el.active == true).length;
        this.inActiveAgents = res.filter((el: any) => el.active == false).length;

      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  getIncompleteOrders(){
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const insurerId = user.tenantId
    this.dashboardService.getFromUrl(`/insurer-dashboard/incomplete-orders/${insurerId}`).subscribe({
      next:(res)=>{
        this.pendingOrders =res
      }
    })
  }
  getNumberOfCustomers(){
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const insurerId = user.tenantId
    this.dashboardService.getFromUrl(`/insurer-dashboard/total-customers/${insurerId}`).subscribe({
      next:(res)=>{
        this.numberOfCustomers= res
      }
    })
  }
  public  getTotalSales(){
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const insurerId = user.tenantId
    this.dashboardService.getFromUrl(`/insurer-dashboard/total-sales/${insurerId}`).subscribe({
      next:(res)=>{
        this.totalSales= res;
        console.log(res)
      }
    })
  }

}
