import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { DriverModel } from "../driver";
import { ActivatedRoute, Router } from '@angular/router';
import { PackageModel } from "src/app/package/package";
import { DriverService } from "../driver.service";


@Component({
  selector: 'getAllDrivers',
  templateUrl: './getAllDrivers.component.html',
  styleUrls: ['./getAllDrivers.component.css']
})
export class GetAllDriversComponent implements OnInit {

  constructor(private http: HttpClient,
    private driverService: DriverService) { }

  allDrivers: DriverModel[]= [];

  ngOnInit(): void {

   // let url = 'http://localhost:9000/driver/getAllDrivers';
    let result = this.http.get<DriverModel[]>(this.driverService.baseDriverURL + '/getAllDrivers').subscribe((response) => {
      if (response) {
          this.allDrivers = response;
      } else {
          alert("Something went wrong.")
      }
  });
}


  }

