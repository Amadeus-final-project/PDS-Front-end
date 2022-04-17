import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'get-all-vehicles',
  templateUrl: './get-all-vehicles.component.html',
  styleUrls: ['./get-all-vehicles.component.css']
})
export class GetAllVehiclesComponent implements OnInit {

  constructor(private http: HttpClient,
    private driverService: DriverService) { }

  allVehicles: VehicleModel[]= [];

  ngOnInit(): void {

    let url = 'http://localhost:9000/vehicle';
    let result = this.http.get<VehicleModel[]>(url + '/getAllVehicles').subscribe((response) => {
      if (response) {
          this.allVehicles = response;
      } else {
          alert("Something went wrong.")
      }
  });
}


  }

