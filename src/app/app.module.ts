
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {ProfileComponent} from "./user/profile/profile.component";
import { ForgottenPasswordComponent } from './user/forgottenPassword/forgottenPassword.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { GetAllMyPackagesComponent} from './user/getAllMyPackages/getAllMyPackages.component';
import { Authentication } from './interceptors/authenticator';
import { SendComponent } from './package/send/send.component';
import { GetAllDriversComponent } from './driver/getAllDrivers/getAllDrivers.component';
import { GetAllVacationsComponent } from './agent/get-all-vacations/get-all-vacations.component';
import { AddVehicleComponent } from './admin/add-vehicle/add-vehicle.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';
import { AddOfficeComponent } from './admin/add-office/add-office.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgottenPasswordComponent,
    GetAllMyPackagesComponent,
    SendComponent,
    GetAllDriversComponent,
    GetAllVacationsComponent,
    AddVehicleComponent,
    AddDriverComponent,
    AddOfficeComponent,
    AddAgentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, [Authentication]],
  bootstrap: [AppComponent]
})
export class AppModule { }
