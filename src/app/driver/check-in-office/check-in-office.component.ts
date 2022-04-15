import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-check-in-office',
  templateUrl: './check-in-office.component.html',
  styleUrls: ['./check-in-office.component.css']
})
export class CheckInOfficeComponent {

  constructor(private http: HttpClient,
    private router: Router,
    private driverService: DriverService) { }


    officeId: number | undefined;


  checkInOffice() {
    // let url = 'http://localhost:9000/package/send';
     let result = this.http.post(this.driverService.baseDriverURL + '/checkInOffice/' + this.officeId, this.officeId).subscribe((response) => {
       if (response) {
           this.router.navigate(['/driver']);
       } else {
           alert("Can't check in.")
       }
   });
   }



}
