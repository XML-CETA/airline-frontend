import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RoleGuardService as RoleGuard } from './modules/auth/service/role-guard.service';
import { RegisterComponent } from './modules/users/register/register.component';
import { FlightCreateFormComponent } from './modules/admin/flight-create-form/flight-create-form.component';
import { FlightsViewComponent } from './modules/admin/flights-view/flights-view.component';
import { FlightsViewUsersComponent } from './modules/users/flights-view-users/flights-view-users.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'make-flight', component: FlightCreateFormComponent },
  { path: 'flights', component: FlightsViewComponent },
  { path: 'uflights', component: FlightsViewUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
