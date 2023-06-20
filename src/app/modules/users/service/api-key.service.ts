import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKeyDto } from '../api-key/dto/ApiKeyDto';

const httpOptions = {
}

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
  constructor(private http: HttpClient) { }

  generateApiKey(apiKeyDto: ApiKeyDto): Observable<string>{
    return this.http.post<string>('http://localhost:3000/apiKey', apiKeyDto, this.httpOptions);
  }
}
