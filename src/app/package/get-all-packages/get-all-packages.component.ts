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
    private packageService:PackageService
  ) {}


  ngOnInit() {
    this.packageService.getAllPackages().subscribe((res:PackageModel[]) => {this.allPackages = res;});
  }


  }

