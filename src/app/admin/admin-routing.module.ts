import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';


const routes: Routes = [
    {
        path: 'add-vehicle',
        component: AddVehicleComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
