import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RouterService } from './router.service';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard implements CanActivate {
  //设定判断
  private _authenticated: boolean = false;
  public get authenticated(): boolean {
    return this._authenticated;
  }
  public set authenticated(value: boolean) {
    this._authenticated = value;
  }
  //守卫
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //直接判断token？
    const observable = this.authService.isUserAuthenticated(this.authService.getBearerToken());
    console.log(observable);
    return observable.pipe(catchError(err => {
      this.routerService.routeToLogin();
      return of(false);
    }),
      map(res => {
        if (res) {
          return true;
        }
        this.routerService.routeToLogin();
        return false;
      }),)
    // if (this.authService.getBearerToken()) {
    //   return this._authenticated = true;
    // } else {
    //   this.routerService.routeToLogin();
    //   return this._authenticated = false;
    // }
    
  }


  constructor(private authService: AuthenticationService,
    private routerService: RouterService) { }



}