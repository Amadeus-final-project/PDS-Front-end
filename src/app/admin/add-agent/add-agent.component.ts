import { Component} from '@angular/core';
import { AddAgentModel } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {


  addNewAgent:AddAgentModel = {
    email: '',
    firstName :'',
    lastName: '',
    password: '',
    phoneNumber: '',
    remainingPaidLeave:0,
  }

  constructor(private adminService: AdminService) { }


  addAgent() {
    this.adminService.addAgent(this.addNewAgent)
  }

}
