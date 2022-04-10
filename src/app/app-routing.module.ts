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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', redirectTo: '/login'},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'getAllMyPackages', component: GetAllMyPackagesComponent},
  {path: 'forgottenPassword', component: ForgottenPasswordComponent},
  {path: 'send', component: SendComponent},

  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
