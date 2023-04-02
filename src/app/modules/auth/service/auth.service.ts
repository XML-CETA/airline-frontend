import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../model/loginDto';
import jwtDecode from 'jwt-decode';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/login';
  constructor(private http: HttpClient) { }

  login(loginDto: LoginDto){
    return this.http.post(this.apiUrl, loginDto, httpOptions);
  }

  public getLoggedInRole(): string {
	  const token = localStorage.getItem('token');
	  if (!token) return 'Unauthenticated';

	  const role = (<any>jwtDecode(token)).custom_claims.role;
	  return role;
  }
}
