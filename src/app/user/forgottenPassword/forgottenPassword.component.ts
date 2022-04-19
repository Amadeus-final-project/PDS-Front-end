import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


export interface forgottenPassword {
  email: string
}

@Component({
  selector: 'forgottenPassword',
  templateUrl: './forgottenPassword.component.html',
  styleUrls: ['./forgottenPassword.component.css']
})
export class ForgottenPasswordComponent {

  forgottenModel: forgottenPassword = {
    email: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) {   }


// editProfile():void{
//   let url = "http://localhost:9000/users/edit";

//   let result =  this.http.put<EditUser>(url, this.editProfileModel)
//     .subscribe((data:any) => {

// this.editProfileModel.email = data.email

      
//       if (data) {
//         this.router.navigate(['/']);
//       }else {
//         alert("Edit profile failed");
//       }
//     })
// }

forgottenPassword(): void {
  //let url = 'http://localhost:9000/users/forgottenPassword';
  this.userService.forgottenPassword(this.forgottenModel);
}


}