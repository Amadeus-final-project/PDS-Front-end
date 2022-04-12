import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllVacationsComponent } from './get-all-vacations/get-all-vacations.component';
import { ActivatedRoute, Router } from '@angular/router';


const routes: Routes = [
    {
        path: 'get-all-vacations',
        component: GetAllVacationsComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
