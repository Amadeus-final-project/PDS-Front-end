import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'delete-driver',
  templateUrl: './delete-driver.component.html',
  styleUrls: ['./delete-driver.component.css']
})
export class DeleteDriverComponent {

  constructor(
    private adminService: AdminService) { }

  driverId!: number;

  deleteDriver() {
    this.adminService.deleteDriver(this.driverId);
   }


}
