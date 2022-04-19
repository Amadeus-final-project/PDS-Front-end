import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageModel } from '../package';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {

  sendPackage:PackageModel = {
    id: 0,
    recipient:'',
    deliveryOffice: '',
    deliveryToOffice: '',
    deliveryType: 0,
    isSigned:false,
    isFragile:false,
    weight: 0,
    height: 0,
    width: 0,
    length: 0,
    description:'',
  }


  constructor(
    private router: Router,
    private packageService: PackageService,
    private http: HttpClient) { }


    send() {
      this.packageService.send(this.sendPackage);
      }


}
