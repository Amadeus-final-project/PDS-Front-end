import { Component } from '@angular/core';
import { AgentService } from '../agent.service';

@Component({
  selector: 'approve-package',
  templateUrl: './approve-package.component.html',
  styleUrls: ['./approve-package.component.css']
})
export class ApprovePackageComponent {

  constructor(
    private agentService: AgentService) { }
  
  packageId!: number;

  approvePackage() {
      this.agentService.approvePackage(this.packageId);
   }

}
