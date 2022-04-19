import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VacationModel } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'request-vacation',
  templateUrl: './request-vacation.component.html',
  styleUrls: ['./request-vacation.component.css']
})
export class RequestVacationComponent {

  constructor(
    private driverService:DriverService) { }


  vacation:VacationModel = {

    startDate:new Date(),
    endDate: new Date(),
    description:'',
    vacationType:''

  }



  requestVacation(){
    this.driverService.requestVacation(this.vacation);
  }


}

