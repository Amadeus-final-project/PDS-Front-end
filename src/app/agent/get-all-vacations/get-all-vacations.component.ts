import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VacationModel } from '../agent';

@Component({
  selector: 'get-all-vacations',
  templateUrl: './get-all-vacations.component.html',
  styleUrls: ['./get-all-vacations.component.css']
})
export class GetAllVacationsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  allVacations: VacationModel[]= [];

  ngOnInit(): void {
    let url = 'http://localhost:9000/agent/viewAllVacations';
    let result = this.http.get<VacationModel[]>(url).subscribe((response) => {
      console.log(response);
      if (response) {
          this.allVacations = response;
      } else {
          alert("Something went wrong.")
      }
  });
}
  }

