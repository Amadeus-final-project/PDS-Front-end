import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageRoutingModule } from './package-routing.module';
//import { AppModule } from '../app.module';
import {FormsModule} from "@angular/forms";

import { SendComponent } from './send/send.component';
import { GetAllPackagesComponent } from './get-all-packages/get-all-packages.component';
import { GetAllPendingPackagesComponent } from './get-all-pending-packages/get-all-pending-packages.component';



@NgModule({
  declarations: [
      SendComponent,
      GetAllPackagesComponent,
      GetAllPendingPackagesComponent,
  ],
  imports: [
    CommonModule,
    PackageRoutingModule,
    FormsModule,
  ]
})
export class PackageModule { }
