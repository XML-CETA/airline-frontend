import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateFlightDto } from './models/create-flight-dto';
import { ShowFlightDto } from './models/show-flights-dto';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'http://localhost:3000/flights';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  public makeFlight(flight: CreateFlightDto) {
    return this.http.post(this.apiUrl, flight, this.httpOptions);
  }

  public getAllFlights() {
    return this.http.get<ShowFlightDto[]>(this.apiUrl, this.httpOptions);
  }

  public deleteFlight(flightId: string) {
    const url = this.apiUrl + `/${flightId}`
    return this.http.delete(url, this.httpOptions);
  }
}
