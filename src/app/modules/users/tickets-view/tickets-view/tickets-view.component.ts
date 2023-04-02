import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { ShowTicketDto } from '../../models/show-ticket-dto';
import { TicketService } from '../../service/ticket-service.service';

@Component({
  selector: 'app-tickets-view',
  templateUrl: './tickets-view.component.html',
  styleUrls: ['./tickets-view.component.css']
})
export class TicketsViewComponent implements OnInit {
  public tickets: ShowTicketDto[]=[]


  constructor(
    private ticketService: TicketService,
    private router: Router,
	private auth: AuthService
  ) { }

  getAllTickets(){
    this.ticketService.getTickets().subscribe(res => {
      this.tickets = res;
    })
  }

  ngOnInit(): void {
    this.getAllTickets()
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

}
