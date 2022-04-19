import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'delete-office',
  templateUrl: './delete-office.component.html',
  styleUrls: ['./delete-office.component.css']
})
export class DeleteOfficeComponent {

  constructor(
    private adminService: AdminService) { }

  officeId!: number;

  deleteOffice() {
    this.adminService.deleteOffice(this.officeId);
   }


}
