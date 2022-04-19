import { Injectable } from '@angular/core';
import {EditUser, IUser, RegisterUser, forgottenUser, ChangePassword} from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { forgottenPassword } from './forgottenPassword/forgottenPassword.component';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction/transaction';
import { PackageReceiveModel } from '../package/package';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: IUser | undefined;


  public get isLogged(): boolean {
    return !!sessionStorage.getItem('token');
  }
    //https://pds-backend.herokuapp.com/users
  public baseUsersURL ="http://localhost:9000/users";
  public baseTransactionURL ="http://localhost:9000/transaction";
  public basePackageURL ="http://localhost:9000/package";


  constructor(private http: HttpClient,private router: Router) { }

  registerUser: RegisterUser | undefined;
  loginUsers: IUser | undefined;
  editUser: EditUser |undefined;

  isLoggedIn:boolean = false;

  changePassword(ChangeModel:ChangePassword){
    let result = this.http.put<ChangePassword>(this.baseUsersURL + '/changePassword', ChangeModel
).subscribe((response) => {
    if (response) {
      this.router.navigate(['/logout']);
    } else {
        alert("Password request failed.")
    }
});
  }


forgottenPassword(forgottenModel:forgottenPassword){
  let result = this.http.put<string>(this.baseUsersURL + '/forgottenPassword', 
  forgottenModel.email,
).subscribe((data:any) => {
forgottenModel.email = data.email
  if (data) {
    alert("New password sent to email.")
  } else {
      alert("Password request failed.")
  }
});
}


getAllTransactions(): Observable<Transaction[]>{
  let url = this.baseTransactionURL + '/getAllTransaction/' + sessionStorage.getItem("username");
return this.http.get<Transaction[]>(url)

}

getAllMyPackages(): Observable<PackageReceiveModel[]>{
  let url = this.basePackageURL + '/getAllMyPackages';
return this.http.get<PackageReceiveModel[]>(url)

}



}






export class UserRole {
  readonly token = sessionStorage.getItem('token');
  if(token: string) {
    const userPayload = JSON.parse(atob(token.split('.')[1]));
    const role = userPayload.role;
  }
}
  