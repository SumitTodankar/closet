import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from './helpers/api.service';
import { AuthService } from './helpers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'closet';
  loading: boolean = true;
  apiService = inject(ApiService);
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.apiService.getCurrentUser().subscribe((res: any) => {
      console.log('user', res);
      this.authService.currentUserSignal.set(res.user);
      this.loading = false;
    });
  }
}
