import { Component } from '@angular/core';
import { AddDriverModel} from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent {


  addNewDriver:AddDriverModel = {
    email: '',
    firstName :'',
    lastName: '',
    password: '',
    phoneNumber: '',
    remainingPaidLeave:0,
  }

  constructor(private adminService: AdminService) { }


  addDriver() {
    this.adminService.addDriver(this.addNewDriver)
  }

}
