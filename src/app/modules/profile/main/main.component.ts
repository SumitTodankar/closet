import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  counter: number = 1;
  router = inject(Router);
  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  getCaptcha() {}
}
