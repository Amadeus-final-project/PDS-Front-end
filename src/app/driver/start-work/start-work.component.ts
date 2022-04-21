import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';

@Component({
  selector: 'start-work',
  templateUrl: './start-work.component.html',
  styleUrls: ['./start-work.component.css']
})
export class StartWorkComponent {

  //startWorke!:string;

  constructor(
    private driverService: DriverService) { }

  
    offices: string[] = ['5.Sofia','6.Varna', '7.Plovdiv', '8.Burgas'];
    
    array:string = '';


  startWork() {

 this.driverService.startWork(this.array.split(','));
  }
  

}
