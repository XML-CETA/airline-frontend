import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from '../model/loginDto';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router:Router) { }
  public loginDto: LoginDto = {} as LoginDto;

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginDto).subscribe(
      data => {
        localStorage.setItem('token', String(data));
        this.router.navigate(['/']);
      }
    );
  }

}
