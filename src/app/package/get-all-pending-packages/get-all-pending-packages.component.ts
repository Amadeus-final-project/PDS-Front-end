import { Component, OnInit } from '@angular/core';
import { PackageReceiveModel } from '../package';
import { PackageService } from '../package.service';

@Component({
  selector: 'get-all-pending-packages',
  templateUrl: './get-all-pending-packages.component.html',
  styleUrls: ['./get-all-pending-packages.component.css']
})
export class GetAllPendingPackagesComponent implements OnInit {

  allPackages: PackageReceiveModel[] = [];


  constructor(
    private packageService:PackageService) { }

    ngOnInit() {
      this.packageService.getAllPendingPackages().subscribe((res:PackageReceiveModel[]) => {this.allPackages = res;
      console.log(res)});
      console.log(this.allPackages)
    }
}
