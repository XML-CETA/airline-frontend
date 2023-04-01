import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  private apiUrl = 'http://localhost:3000/users';

  private httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  public register(newUser: User){
    return this.http.post(this.apiUrl, newUser, this.httpOptions);
  }
}
