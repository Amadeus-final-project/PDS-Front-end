import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'approve-package',
  templateUrl: './approve-package.component.html',
  styleUrls: ['./approve-package.component.css']
})
export class ApprovePackageComponent implements OnInit {

  constructor( private router: Router,
    private agentService: AgentService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  packageId: number | undefined;

  approvePackage() {
     let result = this.http.put(this.agentService.baseAgentURL + '/approvePackage/' + this.packageId, this.packageId).subscribe((response) => {
       if (response) {
           this.router.navigate(['/agent']);
       } else {
           alert("Can't approve")
       }
   });
   }


}
