import { Component, OnInit } from '@angular/core';
import {agentMenu} from "@front-application/layouts";
import {AuthService} from "@front-application/core";
import {InsurerService} from "@front-application/insurer";
import {AgentService} from "../../services/agent.service";

@Component({
  selector: 'front-application-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.scss']
})
export class AgentDashboardComponent implements OnInit {
   agentDashboard: boolean;
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

  constructor(private auth: AuthService,
              private  insurerService: InsurerService,
              private agentService: AgentService,) { }

  ngOnInit(): void {
    this.initialiseDashboard();
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
    this.agentService.getFromUrl('/service-agent').subscribe({
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
  private initialiseDashboard() {
    try{

      const currentUser = this.auth.getUser();
      if(currentUser.roles.includes('ADMIN') || currentUser.roles.includes('TELONE_ADMIN')){
      this.agentDashboard =false
      }
      else if(currentUser.roles.includes('SERVICE_AGENT')){
        this.agentDashboard = true
      }
    }
    catch (e) {
      setTimeout(() => this.initialiseDashboard(), 1000);
    }

  }

}
