import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  model:any = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  editProfile():void{
    let url = "http://localhost:9000/users/edit";
    let result =  this.http.put<Observable<boolean>>(url, {
      phoneNumber:this.model.phoneNumber,
      firstName: this.model.firstName,
      lastName: this.model.lastName,
      email: this.model.email
    },{withCredentials :true})
      .subscribe((isValid) => {
        if (isValid) {
          sessionStorage.setItem('token', btoa(this.model.phoneNumber + ':'+this.model.firstName+':'+ this.model.lastName+':'+ this.model.email));
          this.router.navigate(['']);
        }else {
          alert("Edit profile failed");
        }
      })
  }

}
