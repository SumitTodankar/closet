import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/helpers/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  authSignal = inject(AuthService);
  router = inject(Router);

  lists = [
    { linkTo: '/login', label: 'Log In' },
    { linkTo: '/signup', label: 'Sign Up' },
  ];

  logout() {
    localStorage.setItem('token', '');
    this.authSignal.currentUserSignal.set(null);
  }

  profilePage() {
    this.router.navigateByUrl('/profile');
  }
}
