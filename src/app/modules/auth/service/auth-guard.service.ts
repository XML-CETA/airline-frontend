import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const token:any = localStorage.getItem('token');

    if (token==null || this.jwtHelper.isTokenExpired(token)){
      return false;
    }
    
    const payload:any = jwtDecode(token)

    if (payload.custom_claims.role !== expectedRole){
      return false;
    }
    
    return true;
  }
}
