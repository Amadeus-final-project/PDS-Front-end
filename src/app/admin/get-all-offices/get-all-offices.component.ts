import { Component, OnInit } from '@angular/core';
import { OfficeModel } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'get-all-offices',
  templateUrl: './get-all-offices.component.html',
  styleUrls: ['./get-all-offices.component.css']
})
export class GetAllOfficesComponent implements OnInit {

 allOffices:OfficeModel[] = [];

  constructor(private adminService:AdminService) { }

    ngOnInit() {
      this.adminService.getAllOffices().subscribe((res:OfficeModel[]) => {
        this.allOffices = res;
      });
      
    }

}
