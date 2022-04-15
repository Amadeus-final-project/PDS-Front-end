import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'delete-office',
  templateUrl: './delete-office.component.html',
  styleUrls: ['./delete-office.component.css']
})
export class DeleteOfficeComponent implements OnInit {

  constructor( private router: Router,
    private adminService: AdminService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  officeId: number | undefined;

  deleteOffice() {
     let result = this.http.delete(this.adminService.baseAdminURL + '/office/' + this.officeId).subscribe((response) => {
       if (response) {
           this.router.navigate(['/admin']);
       } else {
           alert("Can't delete office")
       }
   });
   }


}
