import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //https://pds-backend.herokuapp.com/
  public baseAdminURL ="http://localhost:9000/admin";


  constructor(private httpClient: HttpClient,
    private router:Router) { }


}