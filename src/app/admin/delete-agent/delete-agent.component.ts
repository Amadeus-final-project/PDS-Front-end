import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.css']
})
export class DeleteAgentComponent implements OnInit {

  constructor( private router: Router,
    private adminService: AdminService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  agentId: number | undefined;

  deleteAgent() {
     let result = this.http.delete(this.adminService.baseAdminURL + '/agent/' + this.agentId).subscribe((response) => {
       if (response) {
           this.router.navigate(['/admin']);
       } else {
           alert("Can't delete agent")
       }
   });
   }


}
