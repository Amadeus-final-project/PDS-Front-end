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

  ngOnInit() {
    this.driverService.getAllVehicles().subscribe((res:VehicleModel[]) => {
      this.allVehicles = res;
    });
    
  }




  }

