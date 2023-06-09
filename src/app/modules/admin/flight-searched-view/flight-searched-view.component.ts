import { Component, Input } from '@angular/core';
import { FilteredFlightDto } from '../models/filtered-flight-dto';
import { FlightService } from '../flight.service';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { SearchFlightDto } from '../models/search-flight-dto';

@Component({
  selector: 'app-flight-searched-view',
  templateUrl: './flight-searched-view.component.html',
  styleUrls: ['./flight-searched-view.component.css']
})
export class FlightSearchedViewComponent {
  public flights: FilteredFlightDto[] = []

  constructor(
    private flightsService: FlightService,
    private router: Router,
    private auth: AuthService
  ) { }
  

  getAllFlights() {
    this.flightsService.search().subscribe(res => {
      this.flights = res;
    })
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.getAllFlights()
    });
  }

  format(dt: Date | null) {
    if (dt == null) return ""
    let date = new Date(dt)
    date.setHours(date.getHours()+date.getTimezoneOffset()/60)
    let minute 
    if (date.getMinutes()==0){
      minute= "00"
    }else{
      minute= date.getMinutes()
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${minute}`
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
