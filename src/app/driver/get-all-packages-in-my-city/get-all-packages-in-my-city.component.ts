import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PackageReceiveModel } from 'src/app/package/package';
import { DriverService } from '../driver.service';

@Component({
  selector: 'get-all-packages-in-my-city',
  templateUrl: './get-all-packages-in-my-city.component.html',
  styleUrls: ['./get-all-packages-in-my-city.component.css']
})
export class GetAllPackagesInMyCityComponent implements OnInit {

  constructor(private http: HttpClient,
      private driverService: DriverService
    ) { }

    allPackagesForMe: PackageReceiveModel[] = [];

    ngOnInit() {
      this.driverService.getAllgetAllPackagesForMeVacations().subscribe((res:PackageReceiveModel[]) => {
        this.allPackagesForMe = res;
      });
      
    }
    
    }
    

