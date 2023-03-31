import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const token:any = localStorage.getItem('token');
    const payload:any = jwtDecode(token)

    if (payload.custom_claims.role !== expectedRole){
      return false;
    }
    
    return true;
  }
}
