import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../user/user.service';
import {Injectable} from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)

export class Gateway implements CanActivate {

  // TODO: Keys can be ENUM
  private gatewayMap: any = {
    'USER': 'customer-home',
    'DRIVER': 'driver-home',
    'AGENT': 'agent-home',
    'ADMIN': 'admin-home'
  }

  constructor(private service: UserService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    // TODO: Find a place for this
    const token = sessionStorage.getItem('token');
    if(token) {
      const userPayload = JSON.parse(atob(token.split('.')[1]));
      const properRoute = this.gatewayMap[userPayload.role];
      this.router.navigate([properRoute]);
    } else {
      this.router.navigate(['/login']);
    }

    return false;
  }
}
