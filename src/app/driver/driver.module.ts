import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverRoutingModule } from './driver-routing.module';
//import { AppModule } from '../app.module';
import {FormsModule} from "@angular/forms";
import { GetAllDriversComponent } from './getAllDrivers/getAllDrivers.component';
import { GetVehicleComponent } from './get-vehicle/get-vehicle.component';
import { ReleaseVehicleComponent } from './release-vehicle/release-vehicle.component';
import { CheckInOfficeComponent } from './check-in-office/check-in-office.component';
import { StartWorkComponent } from './start-work/start-work.component';
import { SetWorkingAdressComponent } from './set-working-adress/set-working-adress.component';
import { GetAllPackagesInMyCityComponent } from './get-all-packages-in-my-city/get-all-packages-in-my-city.component';
import { GetAllVehiclesComponent } from './get-all-vehicles/get-all-vehicles.component';
import { RequestVacationComponent } from './request-vacation/request-vacation.component';



@NgModule({
  declarations: [
      GetAllDriversComponent,
      GetVehicleComponent,
      ReleaseVehicleComponent,
      CheckInOfficeComponent,
      StartWorkComponent,
      SetWorkingAdressComponent,
      GetAllPackagesInMyCityComponent,
      GetAllVehiclesComponent,
      RequestVacationComponent,
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    FormsModule,
  ]
})
export class DriverModel { }
