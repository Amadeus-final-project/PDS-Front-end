import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendComponent } from './send/send.component';
import { ActivatedRoute, Router } from '@angular/router';


const routes: Routes = [
    {
        path: 'send',
        component: SendComponent
    },
    {
        path: 'send2',
        component: SendComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
