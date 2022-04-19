import { Component, OnInit } from '@angular/core';
import { GetDriverModel } from "../driver";
import { DriverService } from "../driver.service";

@Component({
  selector: 'getAllDrivers',
  templateUrl: './getAllDrivers.component.html',
  styleUrls: ['./getAllDrivers.component.css']
})
export class GetAllDriversComponent implements OnInit {

  constructor(
    private driverService: DriverService) { }

  allDrivers: GetDriverModel[]= [];


ngOnInit() {
  this.driverService.getAllDrivers().subscribe((res:GetDriverModel[]) => {
    this.allDrivers = res;
  });

  }
}
