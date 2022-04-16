import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PackageModel } from 'src/app/package/package';
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

    allPackagesForMe: PackageModel[] = [];

    ngOnInit(): void {
      let url = this.driverService.baseDriverURL + '/getAllPackagesForMe';
      let result = this.http.get<PackageModel[]>(url).subscribe((response) => {
        if (response) {
            this.allPackagesForMe = response;
        } else {
            alert("Something went wrong.")
        }
    });
    }
    
    }
    