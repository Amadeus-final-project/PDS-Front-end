import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'release-vehicle',
  templateUrl: './release-vehicle.component.html',
  styleUrls: ['./release-vehicle.component.css']
})
export class ReleaseVehicleComponent implements OnInit{

  constructor(private http: HttpClient,
    private router: Router,
    private driverService: DriverService) { }


  ngOnInit(): void {
      let result =  this.http.put<boolean>(this.driverService.baseDriverURL + '/vehicle/releaseCar', '')
        .subscribe((response) => {
          if (response){
  
            this.router.navigate(['/driver']);
          }
          else {
            alert("Cant release vehicle");
          }
        });
    
  }











}
