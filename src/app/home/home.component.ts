import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface PackageModel {
  id:number;
  isFragile:boolean
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  myPackages: PackageModel[]= [];

  constructor(
    private http: HttpClient
    ) { }
    

//   ngOnInit(): void {
//     let url = 'http://localhost:9000/package/getAllMyPackages';
//     let result = this.http.get<PackageModel[]>(url).subscribe((response) => {
//       if (response) {
//           this.myPackages = response;
//       } else {
//           alert("Something went wrong.")
//       }
//   });
//   }

 }
