import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateFlightDto } from './models/create-flight-dto';
import { ShowFlightDto } from './models/show-flights-dto';
import { SearchFlightDto } from './models/search-flight-dto'
import { FilteredFlightDto } from './models/filtered-flight-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiUrl = 'http://localhost:3000/flights';
  myObject: SearchFlightDto = { startingPoint: "", destination: "", neededSeats: 0, dateTime: new Date() };

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getMyObject(): SearchFlightDto {
    return this.myObject;
  }

  setMyObject(myObject: SearchFlightDto): void {
    this.myObject = myObject;
  }

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

  public search():Observable<FilteredFlightDto[]> {
    const url = this.apiUrl + `/search`
    return this.http.post<FilteredFlightDto[]>(url, this.myObject, this.httpOptions);
  }
}
