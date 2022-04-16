import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { AddOfficeComponent } from './add-office/add-office.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';
import { DeleteDriverComponent } from './delete-driver/delete-driver.component';
import { DeleteAgentComponent } from './delete-agent/delete-agent.component';
import { DeleteOfficeComponent } from './delete-office/delete-office.component';
import { GetAllUnapprovedVacationsComponent } from './get-all-unapproved-vacations/get-all-unapproved-vacations.component';




@NgModule({
  declarations: [
    AddVehicleComponent,
    AddAgentComponent,
    AddDriverComponent,
    AddOfficeComponent,
    DeleteVehicleComponent,
    DeleteDriverComponent,
    DeleteAgentComponent,
    DeleteOfficeComponent,
    GetAllUnapprovedVacationsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModel { }
