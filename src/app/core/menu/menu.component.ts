import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUserName: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.loggedInUserName = user.username;
      } else {
        this.isLoggedIn = false;
        this.loggedInUserName = undefined;
      }
    });
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
