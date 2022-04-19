import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent {

  constructor(
    private adminService: AdminService) { }

  vehicleId!: number;

  deleteVehicle() {
    this.adminService.deleteVehicle(this.vehicleId);
   }


}
