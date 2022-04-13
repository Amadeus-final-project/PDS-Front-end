import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  public baseAdminURL ="https://pds-backend.herokuapp.com/admin";


  constructor(private httpClient: HttpClient) { }
}
