import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth } from '../services/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard {
  constructor( private authService:Auth, private router:Router) { }

  /* canActivate: CanActivateFn = (route, state) => this.authService.isAuthenticated ? true : this.router.navigate(['login']); */
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated) {
      let requiredRoles = route.data['roles'];
      let userRoles = this.authService.roles;
      for(let roles of userRoles) {
        if(requiredRoles.includes(roles)) {
          return true;
        }
      }
    }
    this.router.navigate(['login']);
    return false;
  }
}
