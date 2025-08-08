import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth } from '../services/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard {
  constructor( private authService:Auth, private router:Router) { }

  /* canActivate: CanActivateFn = (route, state) => this.authService.isAuthenticated ? true : this.router.navigate(['login']); */
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
