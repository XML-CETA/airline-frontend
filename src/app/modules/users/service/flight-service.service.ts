import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShowFlightDto } from '../../admin/models/show-flights-dto';

@Injectable({
    providedIn: 'root'
})
export class FlightService {

    private apiUrl = 'http://localhost:3000/flights';

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    public getAllFlights() {
        const url = this.apiUrl + `/upcoming`
        return this.http.get<ShowFlightDto[]>(url, this.httpOptions);
    }

    public getOne(id: string) {
        const url = this.apiUrl + `/${id}`
        return this.http.get<ShowFlightDto>(url, this.httpOptions);
    }

}
