import { Component } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
import { SearchFlightDto } from '../models/search-flight-dto';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public startingPoint = ""
  public destination = ""
  public neededSeats:number = 1
  public dateTime:Date = new Date()

  constructor(
    private flightsService: FlightService,
    private router: Router
  ) { }

  public convertToDateTime(date: Date) {
    let newDate = new Date(date)
    newDate.setSeconds(15, 15)
    newDate.setHours(newDate.getHours() - newDate.getTimezoneOffset() / 60)

    return newDate
  }

  search() {
    let search = <SearchFlightDto>{
      startingPoint: this.startingPoint,
      destination: this.destination,
      neededSeats: this.neededSeats,
      dateTime: this.convertToDateTime(this.dateTime)
    }
    this.flightsService.setMyObject(search)
    this.router.navigate(['/searched'])
}
}
