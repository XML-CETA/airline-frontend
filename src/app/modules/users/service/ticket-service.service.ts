import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateTicketDto } from '../models/create-ticket-dto';
import { ShowTicketDto } from '../models/show-ticket-dto';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    private apiUrl = 'http://localhost:3000/tickets';

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    public makeTicket(ticket: CreateTicketDto) {
        return this.http.post(this.apiUrl, ticket, this.httpOptions);
      }

    public getTickets(){
        return this.http.get<ShowTicketDto[]>(this.apiUrl,this.httpOptions);
    }
}