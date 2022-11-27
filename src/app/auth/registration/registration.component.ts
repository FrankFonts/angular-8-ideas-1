import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  email: string;
  password: string;
  passwordAgain: string;
  username: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registrate() {
    // rudimentary error handling
    if (
      this.email &&
      this.password &&
      this.password === this.passwordAgain &&
      this.username
    ) {
      this.authService
        .registration(this.email, this.username, this.password)
        .subscribe({
          next: () => this.router.navigateByUrl('/login'),
        });
    }
  }
}
