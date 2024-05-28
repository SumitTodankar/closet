import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { AuthService } from 'src/app/helpers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allProducts: any;

  apiService = inject(ApiService);
  authService = inject(AuthService);

  // constructor(private apiSerive: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe((res) => {
      this.allProducts = res;
    });
  }
}
