import { Component} from '@angular/core';
import {AddOfficeModel} from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent {


  addNewOffice:AddOfficeModel = {
  city: '',
  country: '',
  name: '',
  postcode: '',
  region: '',
  street: ''
  }

  constructor(private adminService: AdminService) { }


  addOffice() {
    this.adminService.addOffice(this.addNewOffice);
  }

}
