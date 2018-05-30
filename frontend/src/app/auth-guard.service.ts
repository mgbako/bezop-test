import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if (this.authService.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }

  /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.authService.user()
    .then(authenticated => {
      if (!authenticated) {
        console.log('not authenticated', authenticated);
        this.router.navigate(['/signin']);
        return false;
      } else {
        console.log('authenticated', authenticated);
        return false;
      }
    });
  } */
}
