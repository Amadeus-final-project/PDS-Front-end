import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllDriversComponent } from './getAllDrivers/getAllDrivers.component';
import { ActivatedRoute, Router } from '@angular/router';


const routes: Routes = [
    {
        path: 'getAllDrivers',
        component: GetAllDriversComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
