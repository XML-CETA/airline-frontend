import { Component, OnInit } from '@angular/core';
import { CreateFlightDto } from '../models/create-flight-dto';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-create-form',
  templateUrl: './flight-create-form.component.html',
  styleUrls: ['./flight-create-form.component.css']
})
export class FlightCreateFormComponent {
  startingPoint = ""
  destination = ""
  price = 0
  allSeats = 0
  dateTime = new Date()


  public startControl = new FormControl('', Validators.required);
  public destinationControl = new FormControl('', Validators.required);
  public seatsControl = new FormControl(0, Validators.min(0));
  public priceControl = new FormControl(0, Validators.min(0));


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

  public makeFlight() {

    this.dateTime = this.convertToDateTime(this.dateTime)

    let flight = {
      startingPoint: this.startingPoint,
      destination: this.destination,
      price: this.price,
      allSeats: this.allSeats,
      dateTime: this.dateTime
    }

    this.flightsService.makeFlight(flight).subscribe({
      next: () => {
        alert('Created successfully');
        this.router.navigate(['/'])
      }
    });
  }

  public validateFields() {
    return this.startControl.valid &&
      this.destinationControl.valid &&
      this.seatsControl.valid &&
      this.priceControl.valid;
  }

}
