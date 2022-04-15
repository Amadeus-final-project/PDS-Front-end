import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user/user.service';
import {Injectable} from '@angular/core';


@Injectable(
  {providedIn: 'root'}
)
export class Authentication implements CanActivate {

  constructor(private service: UserService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    if (this.service.isLogged) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
