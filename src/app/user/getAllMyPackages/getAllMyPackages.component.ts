import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { PackageModel } from "src/app/package/package";

// interface PackageModel {
//     id:number;
//     isFragile:boolean
// }



@Component({
    selector: 'app-getAllMyPackages',
    templateUrl: './getAllMyPackages.component.html',
    styleUrls: ['./getAllMyPackages.component.css']
  })

  export class GetAllMyPackagesComponent implements OnInit {


    myPackages: PackageModel[]= [];

    constructor  (
        private http: HttpClient
    ) {    }


    ngOnInit(): void {
        //let url = 'http://localhost:9000/package/getAllMyPackages';
        let url = 'https://pds-backend.herokuapp.com/package/getAllMyPackages';
        let result = this.http.get<PackageModel[]>(url).subscribe((response) => {
          if (response) {
              this.myPackages = response;
          } else {
              alert("Something went wrong.")
          }
      });
    }

//     getAllMyPackages() {
//         let url = 'http://localhost:9000/package/getAllMyPackages';
//         let result = this.http.get<PackageModel[]>(url).subscribe((response) => {
//           if (response) {
//               this.myPackages = response;
//           } else {
//               alert("Something went wrong.")
//           }
//       });
//       }

    
 }
