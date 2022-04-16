import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkingAdressModel } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'set-working-address',
  templateUrl: './set-working-adress.component.html',
  styleUrls: ['./set-working-adress.component.css']
})
export class SetWorkingAdressComponent {

constructor(private http: HttpClient,
    private router: Router,
    private driverService:DriverService) { }

    addressModel:WorkingAdressModel = {
      country: '',
      city: '',
      postCode: '',
      region: ''
    };

    setWorkingAddress() {
      let result = this.http.post(this.driverService.baseDriverURL + '/workingAddress', this.addressModel).subscribe((response) => {
        if (response) {
            this.router.navigate(['/driver']);
        } else {
            alert("Something went wrong.")
        }
    });
  }



}
