import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
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

	public usernameControl = new FormControl('', Validators.required);
	public passwordControl = new FormControl('', Validators.required);
	public nameControl = new FormControl('', Validators.required);
	public surnameControl = new FormControl('', Validators.required);

	public confirmPassword = this.user.password;

	constructor(
		private registerService: RegisterServiceService,
		private router: Router
	) {}

	public register() {
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

	public validateFields() {
		return this.usernameControl.valid &&
			this.passwordControl.valid &&
			this.nameControl.valid &&
			this.surnameControl.valid;
	}

	private validatePassword() {
		return this.confirmPassword !== this.user.password;
	}
}
