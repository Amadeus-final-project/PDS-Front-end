import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddDriverModel} from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {


  addNewDriver:AddDriverModel = {
    email: '',
    firstName :'',
    lastName: '',
    password: '',
    phoneNumber: '',
    remainingPaidLeave:0,
  }

  constructor(    private router: Router,
                  private adminService: AdminService,
                  private routerModule:RouterModule,
                  private route: ActivatedRoute,
                  private http: HttpClient) { }

  ngOnInit(): void {
  }



  addDriver() {
    let url = 'http://localhost:9000/admin/addDriver';
    let result = this.http.post<AddDriverModel>(url, this.addNewDriver).subscribe((response) => {
      if (response) {
        this.router.navigate(['/']);
      } else {
        alert("Can't add driver.")
      }
    });
  }

}
