import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'delete-driver',
  templateUrl: './delete-driver.component.html',
  styleUrls: ['./delete-driver.component.css']
})
export class DeleteDriverComponent implements OnInit {

  constructor( private router: Router,
    private adminService: AdminService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  driverId: number | undefined;

  deleteDriver() {
     let result = this.http.delete(this.adminService.baseAdminURL + '/driver/' + this.driverId).subscribe((response) => {
       if (response) {
           this.router.navigate(['/admin']);
       } else {
           alert("Can't delete driver")
       }
   });
   }


}
