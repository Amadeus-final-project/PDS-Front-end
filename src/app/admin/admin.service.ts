import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddAgentModel, AddDriverModel, AddOfficeModel, AddVehicleModel, OfficeModel, VacationSimpleModel } from './admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //https://pds-backend.herokuapp.com/
  public baseAdminURL ="http://localhost:9000/admin";


  constructor(private http: HttpClient,
    private router:Router,) { }


    addAgent(addAgentModel: AddAgentModel) {
      let result = this.http.post<AddAgentModel>(this.baseAdminURL + '/addAgent', addAgentModel).subscribe((response) => {
        if (response) {
          this.router.navigate(['/admin']);
        } else {
          alert("Can't add agent.")
        }
      });
    }

    addDriver(addNewDriver:AddDriverModel) {
      let result = this.http.post<AddDriverModel>(this.baseAdminURL + '/addDriver', addNewDriver).subscribe((response) => {
        if (response) {
          this.router.navigate(['/admin']);
        } else {
          alert("Can't add driver.")
        }
      });
    }

    addOffice(addNewOffice:AddOfficeModel) {
      let result = this.http.post<AddOfficeModel>(this.baseAdminURL + '/addOffice', addNewOffice).subscribe((response) => {
        if (response) {
          this.router.navigate(['/admin']);
        } else {
          alert("Can't add office.")
        }
      });
    }

    addVehicle(addNewVehicle:AddVehicleModel) {
       let result = this.http.post<AddVehicleModel>(this.baseAdminURL + '/addVehicle', addNewVehicle).subscribe((response) => {
         if (response) {
             this.router.navigate(['/admin']);
         } else {
             alert("Can't add vehicle.")
         }
     });
     }

     deleteAgent(agentId:number) {
      let result = this.http.delete(this.baseAdminURL + '/agent/' + agentId).subscribe((response) => {
        if (response) {
            this.router.navigate(['/admin']);
        } else {
            alert("Can't delete agent")
        }
    });
    }

    deleteDriver(driverId: number) {
      let result = this.http.delete(this.baseAdminURL + '/driver/' + driverId).subscribe((response) => {
        if (response) {
            this.router.navigate(['/admin']);
        } else {
            alert("Can't delete driver")
        }
    });
    }

    deleteOffice(officeId:number) {
      let result = this.http.delete(this.baseAdminURL + '/office/' + officeId).subscribe((response) => {
        if (response) {
            this.router.navigate(['/admin']);
        } else {
            alert("Can't delete office")
        }
    });
    }

    deleteVehicle(vehicleId:number) {
       let result = this.http.delete(this.baseAdminURL + '/vehicle/' + vehicleId).subscribe((response) => {
         if (response) {
             this.router.navigate(['/admin']);
         } else {
             alert("Can't delete vehicle.")
         }
     });
     }


     getAllOffices (): Observable<OfficeModel[]> {return this.http.get<OfficeModel[]>('http://localhost:9000/office' + '/getAll');}

     getAllUnapprovedVacations(): Observable<VacationSimpleModel[]> {
       return this.http.get<VacationSimpleModel[]>(this.baseAdminURL + '/viewVacations')
     }

     reviewVacation(vacationId:number,approveVacation:boolean){
       let result = this.http.post(this.baseAdminURL + '/vacation/' + vacationId, approveVacation).subscribe((response) => {
         if (response) {
             this.router.navigate(['/viewVacations']);
         } else {
             alert("Can't send package at this moment.")
         }
     });
     }



}