import { Component, OnInit } from '@angular/core';
import {InsurerService} from "@front-application/insurer";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {AgentService} from "../../../../../agent/src/lib/services/agent.service";
import {OrderService} from "../../services/order.service";
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'front-application-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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


  ) { }

  ngOnInit(): void {

  this.getInsurers();
  this.getAgents();

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
  // getOrders(){
  //   this.orderService.getFromUrl('/order/web/get-all-orders').subscribe({
  //     next:(res)=>{
  //       this.numberOfOrders = res.length
  //       this.pendingOrders =res.filter((el:any)=>el.status == this.pending).length;
  //       this.completedOrders =res.filter((el: any)=> el.status == this.completedOrders).length;
  //       console.log(this.pendingOrders)
  //     }
  //   })
  // }


}
