import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'disapprove-package',
  templateUrl: './disapprove-package.component.html',
  styleUrls: ['./disapprove-package.component.css']
})
export class DisapprovePackageComponent implements OnInit {

  constructor( private router: Router,
    private agentService: AgentService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  packageId: number | undefined;

  disapprovePackage() {
     let result = this.http.put(this.agentService.baseAgentURL + '/disapprovePackage/' + this.packageId, this.packageId).subscribe((response) => {
       if (response) {
           this.router.navigate(['/agent']);
       } else {
           alert("Can't disapprove.")
       }
   });
   }


}
