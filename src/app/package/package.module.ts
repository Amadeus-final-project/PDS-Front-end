import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageRoutingModule } from './package-routing.module';
//import { AppModule } from '../app.module';
import {FormsModule} from "@angular/forms";

import { SendComponent } from './send/send.component';



@NgModule({
  declarations: [
      SendComponent,
  ],
  imports: [
    CommonModule,
    PackageRoutingModule,
   // AppModule,
    FormsModule,
  ]
})
export class PackageModule { }
