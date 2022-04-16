import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'get-transaction-by-user',
  templateUrl: './get-transaction-by-user.component.html',
  styleUrls: ['./get-transaction-by-user.component.css']
})
export class GetTransactionByUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



// constructor(private http: HttpClient,
//   private router: Router,
//   private driverService:DriverService) { }

// vehicleId: number | undefined;
// ngOnInit(): void {

// }
// getVehicle() {
//   let result = this.http.put(this.driverService.baseDriverURL + '/vehicle/' + this.vehicleId, this.vehicleId).subscribe((response) => {
//     if (response) {
//         this.router.navigate(['/driver']);
//     } else {
//         alert("Something went wrong.")
//     }
// });
// }