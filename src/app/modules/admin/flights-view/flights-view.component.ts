import { Component, OnInit } from '@angular/core';
import { ShowFlightDto } from '../models/show-flights-dto';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-flights-view',
  templateUrl: './flights-view.component.html',
  styleUrls: ['./flights-view.component.css']
})
export class FlightsViewComponent implements OnInit {

  public flights: ShowFlightDto[] = []

  constructor(
    private flightsService: FlightService,
    private router: Router,
	private auth: AuthService
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


  deleteFlight(id: string) {
    const isSure = confirm("Are you sure you want to delete the selected Flight?")
    if (!isSure)
      return
    this.flightsService.deleteFlight(id).subscribe({
      next: () => {
        this.getAllFlights()
        alert('Successfully deleted flight!');
        this.router.navigate(['/flights'])
      }
    });
  }

  buyTickets(_id: string) {
  }

  public isAdmin(): boolean {
	  return this.auth.getLoggedInRole() === 'Admin';
  }

  public isRegular(): boolean {
	  return this.auth.getLoggedInRole() === 'Regular';
  }
}