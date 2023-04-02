import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FlightService } from '../../service/flight-service.service';
import { TicketService } from '../../service/ticket-service.service';

@Component({
  selector: 'app-tickets-buy',
  templateUrl: './tickets-buy.component.html',
  styleUrls: ['./tickets-buy.component.css']
})
export class TicketsBuyComponent implements OnInit{
  FlightId: string = ""
  startingPoint:string = ""
  destination:string = ""
  price:number = 0
  remainingSeats:number = 0
  dateTime:string = ""
  amount:number = 1 
  fullPrice:number = 0
  

  public amountControl = new FormControl(0, Validators.min(1));

  constructor(
    private flightsService: FlightService,
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  getFlight() {
    let id = this.route.snapshot.paramMap.get('id')
    if (id==null){
      this.FlightId=""
    }else{
      this.FlightId=id
    }

    this.flightsService.getOne(this.FlightId).subscribe(res => {
      this.startingPoint=res.startingPoint
      this.destination = res.destination
      this.price = res.price
      this.remainingSeats = res.remainingSeats
      this.dateTime = this.format(res.dateTime)
      this.calculateFullPrice()
    },
    err => {
      this.router.navigate([""])
    })
  }

  ngOnInit(): void {
    this.getFlight()
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

  calculateFullPrice(){
    this.fullPrice= this.amount*this.price;
  }


  public validateFields() {
    return this.amountControl.valid && this.amount!=null
  }

  public createTicket(){
    let ticket = {
      flightId: this.FlightId,
      amount: this.amount,
    }
  
    this.ticketService.makeTicket(ticket).subscribe({
      next: () => {
        alert('Created successfully');
        this.router.navigate([''])
      }
    });
  }



}
