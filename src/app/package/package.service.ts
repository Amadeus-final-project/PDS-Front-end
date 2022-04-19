import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PackageModel, PackageReceiveModel } from './package';

@Injectable({
  providedIn: 'root'
})

export class PackageService {
    //https://pds-backend.herokuapp.com/package
  public basePackageURL ="http://localhost:9000/package";

  constructor(private http: HttpClient,
    private router: Router) { }

    getAllPackages(): Observable<PackageReceiveModel[]>{
return this.http.get<PackageReceiveModel[]>(this.basePackageURL + '/getAllPackages');
  
  }


  getAllPendingPackages(): Observable<PackageReceiveModel[]>{
    return this.http.get<PackageReceiveModel[]>(this.basePackageURL + '/getPendingPackages');
  }

  send(sendPackage:PackageModel){
    let result = this.http.post<PackageModel>(this.basePackageURL + '/send', sendPackage).subscribe((response) => {
      if (response) {
          this.router.navigate(['/getAllMyPackages']);
      } else {
          alert("Can't send package at this moment.")
      }
  });
  }


}
