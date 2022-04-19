import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'get-vehicle',
  templateUrl: './get-vehicle.component.html',
  styleUrls: ['./get-vehicle.component.css']
})
export class GetVehicleComponent {

  constructor(private http: HttpClient,
    private router: Router,
    private driverService:DriverService) { }

vehicleId!: number;

getVehicle() {
  this.driverService.getVehicle(this.vehicleId);
}


}