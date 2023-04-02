import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../modules/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public token:any;
  constructor(
	  private router:Router,
	  private auth: AuthService
  ){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.token = localStorage.getItem('token');
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public isAdmin(): boolean {
	  return this.auth.getLoggedInRole() === 'Admin';
  }

  public isRegular(): boolean {
	  return this.auth.getLoggedInRole() === 'Regular';
  }
}
