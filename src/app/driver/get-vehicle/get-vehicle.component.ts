import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'get-vehicle',
  templateUrl: './get-vehicle.component.html',
  styleUrls: ['./get-vehicle.component.css']
})
export class GetVehicleComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private driverService:DriverService) { }

vehicleId: number | undefined;
  ngOnInit(): void {

}
getVehicle() {
    let result = this.http.put(this.driverService.baseDriverURL + '/vehicle/' + this.vehicleId, this.vehicleId).subscribe((response) => {
      if (response) {
          this.router.navigate(['/driver']);
      } else {
          alert("Something went wrong.")
      }
  });
}


}