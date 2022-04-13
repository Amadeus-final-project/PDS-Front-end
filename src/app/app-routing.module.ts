import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {ProfileComponent} from "./user/profile/profile.component";
import { ForgottenPasswordComponent } from './user/forgottenPassword/forgottenPassword.component';
import { GetAllMyPackagesComponent } from './user/getAllMyPackages/getAllMyPackages.component';
import { Authentication } from './interceptors/authenticator';
import { SendComponent } from './package/send/send.component';
import { GetAllDriversComponent } from './driver/getAllDrivers/getAllDrivers.component';
import { GetAllVacationsComponent } from './agent/get-all-vacations/get-all-vacations.component';
import { AddVehicleComponent } from './admin/add-vehicle/add-vehicle.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { AddOfficeComponent } from './admin/add-office/add-office.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', redirectTo: '/login'},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'getAllMyPackages', component: GetAllMyPackagesComponent},
  {path: 'forgottenPassword', component: ForgottenPasswordComponent},
  {path: 'send', component: SendComponent},
  {path: `getAllDrivers`, component: GetAllDriversComponent},
  {path: `get-all-vacations`, component: GetAllVacationsComponent},
  {path: `add-vehicle`, component: AddVehicleComponent},
  {path: `add-driver`, component: AddDriverComponent},
  {path: `add-agent`, component: AddAgentComponent},
  {path: `add-office`, component: AddOfficeComponent},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
