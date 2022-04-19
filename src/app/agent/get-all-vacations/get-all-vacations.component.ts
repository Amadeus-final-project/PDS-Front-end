import { Component, OnInit } from '@angular/core';
import { VacationModel } from '../agent';
import { AgentService } from '../agent.service';

@Component({
  selector: 'get-all-vacations',
  templateUrl: './get-all-vacations.component.html',
  styleUrls: ['./get-all-vacations.component.css']
})
export class GetAllVacationsComponent implements OnInit {

  constructor(private agentService:AgentService) { }

  allVacations: VacationModel[]= [];

    ngOnInit() {
      this.agentService.getAllVacations().subscribe((res:VacationModel[]) => {
        this.allVacations = res;
      });
      
    }


  }

