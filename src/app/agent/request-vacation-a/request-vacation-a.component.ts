import { Component } from '@angular/core';
import { VacationRequestModel } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'request-vacation-a',
  templateUrl: './request-vacation-a.component.html',
  styleUrls: ['./request-vacation-a.component.css']
})
export class RequestVacationAComponent  {

  constructor(
    private agentService:AgentService) { }


    vacation:VacationRequestModel = {

      startDate:new Date(),
      endDate: new Date(),
      description:'',
      vacationType:''
  
    }

  requestVacation(){
this.agentService.requestVacation(this.vacation);


}
}