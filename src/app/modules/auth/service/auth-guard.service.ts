import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private jwtHelper:JwtHelperService) { }

  canActivate(): boolean {
    const token:any = localStorage.getItem('token');

    if (token==null || this.jwtHelper.isTokenExpired(token)){
      return false;
    }
    
    return true;
  }
}
