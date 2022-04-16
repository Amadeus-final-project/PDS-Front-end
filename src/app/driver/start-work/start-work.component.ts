import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'start-work',
  templateUrl: './start-work.component.html',
  styleUrls: ['./start-work.component.css']
})
export class StartWorkComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private driverService: DriverService) { }


    packageRoutes: Array<number> = [1,2,3];


  ngOnInit(): void {

    let result = this.http.put(this.driverService.baseDriverURL + '/startWork', this.packageRoutes).subscribe((response) => {
      if (response) {
        console.log(this.packageRoutes)
          this.router.navigate(['/driver']);
      } else {
          alert("Can't start work")
      }
  });
  }
  

}
