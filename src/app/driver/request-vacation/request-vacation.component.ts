import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacationModel } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'request-vacation',
  templateUrl: './request-vacation.component.html',
  styleUrls: ['./request-vacation.component.css']
})
export class RequestVacationComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private driverService:DriverService) { }

  ngOnInit(): void {
  }

  vacation:VacationModel = {

    startDate:new Date(),
    endDate: new Date(),
    description:'',
    vacationType:''

  }



  requestVacation(){
    let result = this.http.put(this.driverService.baseDriverURL + '/requestVacation', this.vacation).subscribe((response) => {
      if (response) {
          // this.router.navigate(['/']);
        
      } else {
          alert("Something went wrong.")
      }
  });
  }


}

