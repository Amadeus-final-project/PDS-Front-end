import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacationSimpleModel } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'get-all-unapproved-vacations',
  templateUrl: './get-all-unapproved-vacations.component.html',
  styleUrls: ['./get-all-unapproved-vacations.component.css']
})
export class GetAllUnapprovedVacationsComponent implements OnInit {

  constructor(private http:HttpClient,
    private adminService:AdminService,
    private router:Router) { }

    allUnapproved: VacationSimpleModel[] = [];


    approveVacation:boolean = true;
    vacationId:number = 0;


    ngOnInit() {
      this.adminService.getAllUnapprovedVacations().subscribe((res:VacationSimpleModel[]) => {
        this.allUnapproved = res;
      });
    }


    reviewVacation() {
       let result = this.http.post(this.adminService.baseAdminURL + '/vacation/' + this.vacationId, this.approveVacation).subscribe((response) => {
         if (response) {
             this.router.navigate(['/viewVacations']);
         } else {
             alert("Something went wrong.")
         }
     });
     }


    
    }