import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminRoutingModule } from './admin-routing.module';




@NgModule({
  declarations: [
    AddVehicleComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModel { }
