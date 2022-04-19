import { Component} from '@angular/core';
import { PackageService } from '../package.service';
import { PackageModel } from '../package';


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
    currentLocation: '',
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
    private packageService: PackageService) { }

    send() {
      this.packageService.send(this.sendPackage);
      }


}
