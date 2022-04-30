import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AgentHeaderComponent } from './agent-header/agent-header.component';
import { DriverHeaderComponent } from './driver-header/driver-header.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AgentHeaderComponent,
    DriverHeaderComponent,
    CustomerHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AgentHeaderComponent,
    DriverHeaderComponent,
    CustomerHeaderComponent
  ]
})


export class CoreModule { }
