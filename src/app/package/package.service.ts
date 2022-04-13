import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PackageService {

  public basePackageURL ="https://pds-backend.herokuapp.com/package";

  constructor(private httpClient: HttpClient) { }
}
