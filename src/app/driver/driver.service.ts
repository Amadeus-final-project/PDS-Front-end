import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PackageReceiveModel } from '../package/package';
import { GetDriverModel, VacationModel, VehicleModel, WorkingAdressModel } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  //https://pds-backend.herokuapp.com/driver
  public baseDriverURL = "http://localhost:9000/driver";

  constructor(private http: HttpClient,
    private router: Router) { }

  checkInOffice(officeId: number) {
    let result = this.http.post(this.baseDriverURL + '/checkInOffice/' + officeId, {}).subscribe((response) => {
      if (response) {
        this.router.navigate(['/driver']);
      }
    }, (errorResponse => alert(errorResponse.error.message)));
  }


  getAllgetAllPackagesForMeVacations(): Observable<PackageReceiveModel[]> { return this.http.get<PackageReceiveModel[]>(this.baseDriverURL + '/getAllPackagesForMe'); }

  getAllVehicles(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>('http://localhost:9000/vehicle' + '/getAllVehicles');
  }

  getVehicle(vehicleId: number) {
    let result = this.http.put(this.baseDriverURL + '/vehicle/' + vehicleId, {}).subscribe((response) => {
      if (response) {
        this.router.navigate(['/driver-home']);
      }
    }, (errorResponse => alert(errorResponse.error.message)));
  }

  getAllDrivers(): Observable<GetDriverModel[]> {
    { return this.http.get<GetDriverModel[]>(this.baseDriverURL + '/getAllDrivers'); }
  }

  releaseVehicle() {
    let result = this.http.put<boolean>(this.baseDriverURL + '/vehicle/releaseCar', {})
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/driver-home']);
        }
      }, (errorResponse => alert(errorResponse.error.message)));
  }

  requestVacation(vacation: VacationModel) {
    let result = this.http.put(this.baseDriverURL + '/requestVacation', vacation).subscribe((response) => {
      if (response) {
        this.router.navigate(['/driver-home']);
      }
    }, (errorResponse => alert(errorResponse.error.message)));
  }

  setWorkingAddress(addressModel: WorkingAdressModel) {
    let result = this.http.post(this.baseDriverURL + '/workingAddress', addressModel).subscribe((response) => {
      if (response) {
        this.router.navigate(['/driver-home']);
      }
    }, (errorResponse => alert(errorResponse.error.message)));
  }

  startWork(packageRoutes: Array<string>): void {
    let result = this.http.put(this.baseDriverURL + '/startWork', packageRoutes).subscribe((response) => {
      if (response) {
        console.log(response);
        this.router.navigate(['/driver-home']);
      }
    }, (errorResponse => alert(errorResponse.error.message)));
  }

}

