import { Component } from '@angular/core';
import { AgentService } from '../agent.service';


export interface EditAgent {
  phoneNumber: string;
  firstName: string,
  lastName: string,
  email: string
}

@Component({
  selector: 'edit-agent-profile',
  templateUrl: './edit-agent-profile.component.html',
  styleUrls: ['./edit-agent-profile.component.css']
})

export class EditAgentProfileComponent {


  editProfileModel: EditAgent = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber:''
  };


  constructor(
    private agentService : AgentService) { }

  editProfile():void{
    this.agentService.editProfile(this.editProfileModel)
  }

}
