
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
import { Authentication } from './interceptors/auth-guard';
import { SendComponent } from './package/send/send.component';
import { GetAllDriversComponent } from './driver/getAllDrivers/getAllDrivers.component';
import { GetAllVacationsComponent } from './agent/get-all-vacations/get-all-vacations.component';
import { AddVehicleComponent } from './admin/add-vehicle/add-vehicle.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';
import { AddOfficeComponent } from './admin/add-office/add-office.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { DeleteVehicleComponent } from './admin/delete-vehicle/delete-vehicle.component';
import { DeleteDriverComponent } from './admin/delete-driver/delete-driver.component';
import { DeleteAgentComponent } from './admin/delete-agent/delete-agent.component';
import { DeleteOfficeComponent } from './admin/delete-office/delete-office.component';
import { DisapprovePackageComponent } from './agent/disapprove-package/disapprove-package.component';
import { ApprovePackageComponent } from './agent/approve-package/approve-package.component';
import { GetVehicleComponent } from './driver/get-vehicle/get-vehicle.component';
import {Gateway} from "./interceptors/gateway-guard";
import {SharedModule} from "./shared/shared.module";
import { ReleaseVehicleComponent } from './driver/release-vehicle/release-vehicle.component';
import { CheckInOfficeComponent } from './driver/check-in-office/check-in-office.component';
import { StartWorkComponent } from './driver/start-work/start-work.component';
import { GetAllPackagesComponent } from './package/get-all-packages/get-all-packages.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { DriverHomeComponent } from './home/driver-home/driver-home.component';
import { AgentHomeComponent } from './home/agent-home/agent-home.component';
import { CustomerHomeComponent } from './home/customer-home/customer-home.component';
import { GetAllPendingPackagesComponent } from './package/get-all-pending-packages/get-all-pending-packages.component';
import { GetAllTransactionsComponent } from './transaction/get-all-transactions/get-all-transactions.component';
import { GetTransactionByUserComponent } from './transaction/get-transaction-by-user/get-transaction-by-user.component';



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
    AddAgentComponent,
    DeleteVehicleComponent,
    DeleteDriverComponent,
    DeleteAgentComponent,
    DeleteOfficeComponent,
    DisapprovePackageComponent,
    ApprovePackageComponent,
    GetVehicleComponent,
    ReleaseVehicleComponent,
    CheckInOfficeComponent,
    StartWorkComponent,
    GetAllPackagesComponent,
    AdminHomeComponent,
    DriverHomeComponent,
    AgentHomeComponent,
    CustomerHomeComponent,
    GetAllPendingPackagesComponent,
    GetAllTransactionsComponent,
    GetTransactionByUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    Authentication,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
