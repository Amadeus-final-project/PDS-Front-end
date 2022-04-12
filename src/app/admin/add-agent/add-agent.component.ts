import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AddAgentModel } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {


  addNewAgent:AddAgentModel = {
    email: "string",
    firstName :'string',
    lastName: 'string',
    password: 'string',
    phoneNumber: 'string',
    remainingPaidLeave:0,
  }

  constructor(    private router: Router,
                  private adminService: AdminService,
                  private routerModule:RouterModule,
                  private route: ActivatedRoute,
                  private http: HttpClient) { }

  ngOnInit(): void {
  }



  addAgent() {
    let url = 'http://localhost:9000/admin/addAgent';
    let result = this.http.post<AddAgentModel>(url, this.addNewAgent).subscribe((response) => {
      if (response) {
        this.router.navigate(['/']);
      } else {
        alert("Can't add agent.")
      }
    });
  }

}
