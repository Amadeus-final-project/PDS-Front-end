import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {


  public baseDriverURL ="https://pds-backend.herokuapp.com/driver";

  constructor(private httpClient: HttpClient) { }
}
