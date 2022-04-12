import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AgentRoutingModule} from './agent-routing.module';
import { GetAllVacationsComponent } from './get-all-vacations/get-all-vacations.component';



@NgModule({
  declarations: [
      GetAllVacationsComponent,
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    FormsModule,
  ]
})
export class AgentModel { }
