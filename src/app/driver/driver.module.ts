import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverRoutingModule } from './driver-routing.module';
//import { AppModule } from '../app.module';
import {FormsModule} from "@angular/forms";
import { GetAllDriversComponent } from './getAllDrivers/getAllDrivers.component';



@NgModule({
  declarations: [
      GetAllDriversComponent,
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    FormsModule,
  ]
})
export class DriverModel { }
