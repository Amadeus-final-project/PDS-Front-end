import { Component, OnInit } from "@angular/core";
import { PackageReceiveModel } from "src/app/package/package";
import { UserService } from "../user.service";



@Component({
    selector: 'app-getAllMyPackages',
    templateUrl: './getAllMyPackages.component.html',
    styleUrls: ['./getAllMyPackages.component.css']
})

export class GetAllMyPackagesComponent implements OnInit {


    myPackages: PackageReceiveModel[] = [];

    constructor(
        private userService: UserService
    ) { }



    ngOnInit() {
        this.userService.getAllMyPackages().subscribe((res: PackageReceiveModel[]) => {
            this.myPackages = res;
            console.log(this.myPackages)
        });
    }



}
