import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './modules/auth/token.interceptor';
import { RegisterComponent } from './modules/users/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightCreateFormComponent } from './modules/admin/flight-create-form/flight-create-form.component';
import { FlightsViewComponent } from './modules/admin/flights-view/flights-view.component';
import { FlightsViewUsersComponent } from './modules/users/flights-view-users/flights-view-users.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    FlightCreateFormComponent,
    FlightsViewComponent,
    FlightsViewUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
