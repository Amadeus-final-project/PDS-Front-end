import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //https://pds-backend.herokuapp.com/
  public baseAdminURL ="http://localhost:9000/admin";


  constructor(private httpClient: HttpClient) { }
}
