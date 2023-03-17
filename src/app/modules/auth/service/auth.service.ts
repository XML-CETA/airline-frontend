import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../model/loginDto';
import { AuthResponse } from '../model/authResponse';


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

}
