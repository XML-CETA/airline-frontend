import { Component, OnInit } from '@angular/core';
import { ShowFlightDto } from '../../admin/models/show-flights-dto';
import { FlightService } from '../service/flight-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights-view-users',
  templateUrl: './flights-view-users.component.html',
  styleUrls: ['./flights-view-users.component.css']
})
export class FlightsViewUsersComponent implements OnInit {
  public flights: ShowFlightDto[] = []

  constructor(
    private flightsService: FlightService,
    private router: Router
  ) { }

  getAllFlights() {
    this.flightsService.getAllFlights().subscribe(res => {
      this.flights = res;
    })
  }

  ngOnInit(): void {
    this.getAllFlights()
  }

  format(dt: Date | null) {
    if (dt == null) return ""
    let date = new Date(dt)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
  }


  buyTickets(id: string) {
    //ovde logiku za kupovinu karata u flight servisu ima getonemetoda ako treba
  }
}
