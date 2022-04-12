import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import {AddAgentComponent} from "./add-agent/add-agent.component";
import {AddDriverComponent} from "./add-driver/add-driver.component";
import {AddOfficeComponent} from "./add-office/add-office.component";


const routes: Routes = [
    {
        path: 'add-vehicle',
        component: AddVehicleComponent
    },
  {
    path: 'add-agent',
    component:AddAgentComponent
  },
  {
    path: 'add-driver',
    component:AddDriverComponent
  },
  {
    path: 'add-office',
    component:AddOfficeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
