import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUser } from '../user/user';
import { UserService } from '../user/user.service';
import { VacationModel, VacationRequestModel } from './agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  
  //https://pds-backend.herokuapp.com/agent
  public baseAgentURL ="http://localhost:9000/agent";


  constructor(private router: Router,
    private http: HttpClient,
    private userService: UserService) { }

  approvePackage(packageId:number) {
    let result = this.http.put(this.baseAgentURL + '/approvePackage/' + packageId, {}).subscribe((response) => {
      if (response) {
          this.router.navigate(['/agent-home']);
      }
  },(errorResponse => alert(errorResponse.error.message)));
  }

  disapprovePackage(packageId:number) {
    let result = this.http.put(this.baseAgentURL + '/disapprovePackage/' + packageId,{}).subscribe((response) => {
      if (response) {
          this.router.navigate(['/agent-home']);
      }
  },(errorResponse => alert(errorResponse.error.message)));
  }


  editProfile(editProfileModel: EditUser):void{

    let result =  this.http.put<EditUser>(this.baseAgentURL + '/edit', editProfileModel)
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/agent-home']);
        }
      },(errorResponse => alert(errorResponse.error.message)))
  }

  getAllVacations (): Observable<VacationModel[]> {return this.http.get<VacationModel[]>(this.baseAgentURL + '/viewAllVacations');}

  requestVacation(vacation:VacationRequestModel){
    let result = this.http.put(this.baseAgentURL + '/requestVacation', vacation).subscribe((response) => {
      if (response) {
         this.router.navigate(['/agent-home']);
      }
  },(errorResponse => alert(errorResponse.error.message)));
  }

}
