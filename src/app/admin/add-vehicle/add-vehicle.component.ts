import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddVehicleModel } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {


  addNewVehicle:AddVehicleModel = {
    capacity:0,
    range: '',
    brand :'',
    year: 0,
    fuelType:'',
  }

  constructor(    private router: Router,
    private adminService: AdminService,
    private routerModule:RouterModule,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
  }



  addVehicle() {
   // let url = 'http://localhost:9000/admin/addVehicle';
    let result = this.http.post<AddVehicleModel>(this.adminService.baseAdminURL + '/addVehicle', this.addNewVehicle).subscribe((response) => {
      if (response) {
          this.router.navigate(['/']);
      } else {
          alert("Can't add vehicle.")
      }
  });
  }

}




