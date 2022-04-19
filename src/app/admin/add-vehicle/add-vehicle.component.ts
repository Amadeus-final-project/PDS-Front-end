import { Component } from '@angular/core';
import { AddVehicleModel } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {


  addNewVehicle:AddVehicleModel = {
    capacity:0,
    range: '',
    brand :'',
    year: 0,
    fuelType:'',
  }

  constructor(
    private adminService: AdminService) { }


  addVehicle() {
    this.adminService.addVehicle(this.addNewVehicle);
  }

}




