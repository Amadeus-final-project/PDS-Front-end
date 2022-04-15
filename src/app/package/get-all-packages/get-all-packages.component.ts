import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PackageModel } from '../package';
import { PackageService } from '../package.service';

@Component({
  selector: 'get-all-packages',
  templateUrl: './get-all-packages.component.html',
  styleUrls: ['./get-all-packages.component.css']
})
export class GetAllPackagesComponent implements OnInit {

  allPackages: PackageModel[] = [];

  constructor(
    private http: HttpClient,
    private packageService:PackageService
  ) {}

  ngOnInit(): void {
    let url = this.packageService.basePackageURL + '/getAllPackages';
    let result = this.http.get<PackageModel[]>(url).subscribe((response) => {
      if (response) {
          this.allPackages = response;
      } else {
          alert("Something went wrong.")
      }
  });
}

  }

