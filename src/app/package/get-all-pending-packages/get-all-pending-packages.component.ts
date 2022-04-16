import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PackageModel } from '../package';
import { PackageService } from '../package.service';

@Component({
  selector: 'get-all-pending-packages',
  templateUrl: './get-all-pending-packages.component.html',
  styleUrls: ['./get-all-pending-packages.component.css']
})
export class GetAllPendingPackagesComponent implements OnInit {

  allPackages: PackageModel[] = [];


  constructor(    private http: HttpClient,
    private packageService:PackageService) { }

  ngOnInit(): void {
    let url = this.packageService.basePackageURL + '/getPendingPackages';
    let result = this.http.get<PackageModel[]>(url).subscribe((response) => {
      if (response) {
          this.allPackages = response;
      } else {
          alert("Something went wrong.")
      }
  });
  }

}
