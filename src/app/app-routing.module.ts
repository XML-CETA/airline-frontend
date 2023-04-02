import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { FlightCreateFormComponent } from './modules/admin/flight-create-form/flight-create-form.component';
import { FlightsViewComponent } from './modules/admin/flights-view/flights-view.component';
import { AuthGuardService } from './modules/auth/service/auth-guard.service';
import { TicketsBuyComponent } from './modules/users/tickets-buy/tickets-buy/tickets-buy.component';
import { TicketsViewComponent } from './modules/users/tickets-view/tickets-view/tickets-view.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'make-flight', component: FlightCreateFormComponent, canActivate: [AuthGuardService], data:{expectedRole: 'Admin'}},
  { path: '', component: FlightsViewComponent },
  { path: 'ticket-buy/:id', component: TicketsBuyComponent},
  { path: 'tickets', component: TicketsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
