import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';

@Component({
  selector: 'start-work',
  templateUrl: './start-work.component.html',
  styleUrls: ['./start-work.component.css']
})
export class StartWorkComponent implements OnInit {

  constructor(
    private driverService: DriverService) { }


    packageRoutes: Array<number> = [1,2,3];


  ngOnInit(): void {
 this.driverService.startWork(this.packageRoutes);
  }
  

}
