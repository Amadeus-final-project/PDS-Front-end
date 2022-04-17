import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeModel } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-get-all-offices',
  templateUrl: './get-all-offices.component.html',
  styleUrls: ['./get-all-offices.component.css']
})
export class GetAllOfficesComponent implements OnInit {

  constructor(private http:HttpClient,
    private adminService:AdminService,
    private router:Router) { }

    allOffices: OfficeModel[] = [];

    ngOnInit(): void {
      let url = 'http://localhost:9000/office' + '/getAll';
      let result = this.http.get<OfficeModel[]>(url).subscribe((response) => {
        if (response) {
            this.allOffices = response;
        } else {
            alert("Something went wrong.")
        }
    });
    }

}
