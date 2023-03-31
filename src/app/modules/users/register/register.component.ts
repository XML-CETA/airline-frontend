import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RegisterServiceService } from '../service/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	public user = <User> {
		name: '',
		role: 'Regular',
		surname: '',
		username: '',
		password: ''
	};

	public confirmPassword = this.user.password;

	constructor(
		private registerService: RegisterServiceService,
		private router: Router
	) {}

	public register() {
		if (this.validateUser()) {
			alert('Not all fields filled');
			return;
		};

		if (this.validatePassword()) {
			alert('Passwords do not match');
			return;
		}

		this.registerService.register(this.user).subscribe({
			next: () => {
				alert('Registered successfully');
				this.router.navigate(['/'])
			},
			error: () => alert('Username taken')
		});
	}

	private validateUser() {
		return this.user.username === '' ||
			this.user.password === '' ||
			this.user.name === '' ||
			this.user.surname === ''
	}

	private validatePassword() {
		return this.confirmPassword !== this.user.password;
	}
}
