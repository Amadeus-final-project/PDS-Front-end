import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';

@Component({
  selector: 'release-vehicle',
  templateUrl: './release-vehicle.component.html',
  styleUrls: ['./release-vehicle.component.css']
})
export class ReleaseVehicleComponent implements OnInit{

  constructor(
    private driverService: DriverService) { }


  ngOnInit(): void {
    this.driverService.releaseVehicle();
  }











}
