import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PackageService {
    //https://pds-backend.herokuapp.com/package
  public basePackageURL ="http://localhost:9000/package";

  constructor(private httpClient: HttpClient) { }
}
