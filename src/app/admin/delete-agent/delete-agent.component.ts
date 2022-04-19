import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.css']
})
export class DeleteAgentComponent {

  constructor(
    private adminService: AdminService) { }

  agentId!: number;

  deleteAgent() {
    this.adminService.deleteAgent(this.agentId)
   }


}
