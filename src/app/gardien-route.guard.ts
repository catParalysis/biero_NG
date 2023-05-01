import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServService } from './serv/auth-serv.service';

@Injectable({
  providedIn: 'root'
})
//export class GardienRouteGuard implements CanActivate {
export class GardienRouteGuard {
  constructor(private authServ:AuthServService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.authServ.verifConnection();
  }

  peutActiver(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authServ.verifConnection();
  }
  
}
