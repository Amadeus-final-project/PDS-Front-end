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


    approveVacation:string = '';
    vacationId:number = 0;


    ngOnInit() {
      this.adminService.getAllUnapprovedVacations().subscribe((res:VacationSimpleModel[]) => {
        this.allUnapproved = res;
      });
    }


    reviewVacation() {

      if (this.approveVacation.split("|")[0] === "1"){
        let result = this.http.post(this.adminService.baseAdminURL + '/approveVacation/' + this.approveVacation.split("|")[1], this.approveVacation).subscribe((response) => {
          if (response) {
              this.router.navigate(['/viewVacations']);
          } else {
              alert("Something went wrong.")
          }
      });

      }else if (this.approveVacation.split("|")[0] === "2"){
        let result = this.http.post(this.adminService.baseAdminURL + '/disapproveVacation/' + this.approveVacation.split("|")[1], this.approveVacation).subscribe((response) => {
          if (response) {
              this.router.navigate(['/viewVacations']);
          } else {
              alert("Something went wrong.")
          }
      });
      }



     }


    
    }