import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { AddOfficeComponent } from './add-office/add-office.component';




@NgModule({
  declarations: [
    AddVehicleComponent,
    AddAgentComponent,
    AddDriverComponent,
    AddOfficeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModel { }
