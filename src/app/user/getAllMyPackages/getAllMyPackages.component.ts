import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PackageModel } from "src/app/package/package";
import { UserService } from "../user.service";



@Component({
    selector: 'app-getAllMyPackages',
    templateUrl: './getAllMyPackages.component.html',
    styleUrls: ['./getAllMyPackages.component.css']
  })

  export class GetAllMyPackagesComponent implements OnInit {


    myPackages: PackageModel[]= [];

    constructor  (
        private userService:UserService
    ) {    }



    ngOnInit() {
        this.userService.getAllMyPackages().subscribe((res:PackageModel[]) => {this.myPackages = res;});
      }


    
 }
