import {Component, OnInit, ViewChild} from '@angular/core';
import {AddAgentComponent} from "../../components/agent/add-agent/add-agent.component";
import {MatDialog} from "@angular/material/dialog";
import {AgentService} from "../../services/agent.service";
import {AgentsService} from "../../services/agents.service";
import {MatTableDataSource} from "@angular/material/table";

import {Agent} from "../../models";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'front-application-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
  private agentsList: any;
  agents: Agent[] = [];

  displayedColumns: string[] = ['username', 'email','mobileNumber', 'active', 'blocked'];
  dataSource = new MatTableDataSource<Agent>(this.agents);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private dialog: MatDialog,
              private agentService: AgentsService,) {
  }

  ngOnInit(): void {
    this.getAgent()
  }

  getAgent() {
    this.agentService.getFromUrl(`service-agents/all`).subscribe(
      result => this.dataSource = result)

  }

  showAddAgentDialog() {
    const dialogRef = this.dialog.open(AddAgentComponent, {
      width: '800px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getAgent();
    });
  }
}
