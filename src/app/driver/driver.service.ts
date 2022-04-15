import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

    //https://pds-backend.herokuapp.com/driver
  public baseDriverURL ="http://localhost:9000/driver";

  constructor(private httpClient: HttpClient) { }
}
