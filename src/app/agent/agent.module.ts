import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AgentRoutingModule} from './agent-routing.module';
import { GetAllVacationsComponent } from './get-all-vacations/get-all-vacations.component';
import { ApprovePackageComponent } from './approve-package/approve-package.component';
import { DisapprovePackageComponent } from './disapprove-package/disapprove-package.component';
import { RequestVacationAComponent } from './request-vacation-a/request-vacation-a.component';



@NgModule({
  declarations: [
      GetAllVacationsComponent,
      ApprovePackageComponent,
      DisapprovePackageComponent,
      RequestVacationAComponent,
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    FormsModule,
  ]
})
export class AgentModel { }
