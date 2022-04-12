import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {AddOfficeModel} from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {


  addNewOffice:AddOfficeModel = {
  "city": "string",
  "country": "string",
  "name": "string",
  "postcode": "string",
  "region": "string",
  "street": "string"
  }

  constructor(    private router: Router,
                  private adminService: AdminService,
                  private routerModule:RouterModule,
                  private route: ActivatedRoute,
                  private http: HttpClient) { }

  ngOnInit(): void {
  }



  addOffice() {
    let url = 'http://localhost:9000/admin/addOffice';
    let result = this.http.post<AddOfficeModel>(url, this.addNewOffice).subscribe((response) => {
      if (response) {
        this.router.navigate(['/']);
      } else {
        alert("Can't add office.")
      }
    });
  }

}