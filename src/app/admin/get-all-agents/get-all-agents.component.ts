import { Component, OnInit } from '@angular/core';
import { AgentModel } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'get-all-agents',
  templateUrl: './get-all-agents.component.html',
  styleUrls: ['./get-all-agents.component.css']
})
export class GetAllAgentsComponent implements OnInit {

  allAgents:AgentModel[] = [];

  constructor(private adminService:AdminService) { }

    ngOnInit() {
      this.adminService.getAllAgents().subscribe((res:AgentModel[]) => {
        this.allAgents = res;
      });
      
    }

}
