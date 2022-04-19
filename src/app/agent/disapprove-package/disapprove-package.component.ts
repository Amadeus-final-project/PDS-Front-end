import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'disapprove-package',
  templateUrl: './disapprove-package.component.html',
  styleUrls: ['./disapprove-package.component.css']
})
export class DisapprovePackageComponent {

  constructor( private router: Router,
    private agentService: AgentService,
    private http: HttpClient) { }

  
  packageId!: number;

  disapprovePackage() {
    this.agentService.disapprovePackage(this.packageId);
   }


}
