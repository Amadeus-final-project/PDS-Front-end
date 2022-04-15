import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';

@Component({
  selector: 'delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent implements OnInit {

  constructor( private router: Router,
    private adminService: AdminService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  vehicleId: number | undefined;

  deleteVehicle() {
    // let url = 'http://localhost:9000/admin/deleteVehicle';
     let result = this.http.delete(this.adminService.baseAdminURL + '/vehicle/' + this.vehicleId).subscribe((response) => {
       if (response) {
           this.router.navigate(['/admin']);
       } else {
           alert("Can't delete vehicle.")
       }
   });
   }


}
