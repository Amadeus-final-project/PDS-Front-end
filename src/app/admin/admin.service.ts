import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddAgentModel, AddDriverModel, AddOfficeModel, AddVehicleModel, AgentModel, OfficeModel, VacationSimpleModel } from './admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //https://pds-backend.herokuapp.com/
  public baseAdminURL ="http://localhost:9000/admin";


  constructor(private http: HttpClient,
    private router:Router) { }


    addAgent(addAgentModel: AddAgentModel) {
      let result = this.http.post<AddAgentModel>(this.baseAdminURL + '/addAgent', addAgentModel).subscribe((response) => {
        if (response) {
          this.router.navigate(['/admin-home']);
        }
      },(errorResponse => alert(errorResponse.error.message)));
    }

    addDriver(addNewDriver:AddDriverModel) {
      let result = this.http.post<AddDriverModel>(this.baseAdminURL + '/addDriver', addNewDriver).subscribe((response) => {
        if (response) {
          this.router.navigate(['/admin-home']);
        }
      },(errorResponse => alert(errorResponse.error.message)));
    }

    addOffice(addNewOffice:AddOfficeModel) {
      let result = this.http.post<AddOfficeModel>(this.baseAdminURL + '/addOffice', addNewOffice).subscribe((response) => {
        if (response) {
          this.router.navigate(['/admin-home']);
        }
      },(errorResponse => alert(errorResponse.error.message)));
    }

    addVehicle(addNewVehicle:AddVehicleModel) {
       let result = this.http.post<AddVehicleModel>(this.baseAdminURL + '/addVehicle', addNewVehicle).subscribe((response) => {
         if (response) {
             this.router.navigate(['/admin-home']);
         }
     },(errorResponse => alert(errorResponse.error.message)));
     }

     deleteAgent(agentId:number) {
      let result = this.http.delete(this.baseAdminURL + '/agent/' + agentId).subscribe((response) => {
        if (response) {
            this.router.navigate(['/admin-home']);
        }
    },(errorResponse => alert(errorResponse.error.message)));
    }

    deleteDriver(driverId: number) {
      let result = this.http.delete(this.baseAdminURL + '/driver/' + driverId).subscribe((response) => {
        if (response) {
            this.router.navigate(['/admin-home']);
        }
    },(errorResponse => alert(errorResponse.error.message)));
    }

    deleteOffice(officeId:number) {
      let result = this.http.delete(this.baseAdminURL + '/office/' + officeId).subscribe((response) => {
        if (response) {
            this.router.navigate(['/admin-home']);
        }
    },(errorResponse => alert(errorResponse.error.message)));
    }

    deleteVehicle(vehicleId:number) {
       let result = this.http.delete(this.baseAdminURL + '/vehicle/' + vehicleId).subscribe((response) => {
         if (response) {
             this.router.navigate(['/admin-home']);
         }
     },(errorResponse => alert(errorResponse.error.message)));
     }


     getAllOffices (): Observable<OfficeModel[]> {return this.http.get<OfficeModel[]>('http://localhost:9000/office' + '/getAll');}

     getAllAgents (): Observable<AgentModel[]> {return this.http.get<AgentModel[]>('http://localhost:9000/agent' + '/getAllAgents');}


     getAllUnapprovedVacations(): Observable<VacationSimpleModel[]> {
       return this.http.get<VacationSimpleModel[]>(this.baseAdminURL + '/viewVacations')
     }

     reviewVacation(vacationId:number,approveVacation:boolean){
       let result = this.http.post(this.baseAdminURL + '/vacation/' + vacationId, approveVacation).subscribe((response) => {
         if (response) {
             this.router.navigate(['/viewVacations']);
         }
     },(errorResponse => alert(errorResponse.error.message)));
     }



}