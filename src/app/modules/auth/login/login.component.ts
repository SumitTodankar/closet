import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/helpers/api.service';
import { AuthService } from 'src/app/helpers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  apiService = inject(ApiService);
  authService = inject(AuthService);

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    localStorage.setItem('token', '');
    this.authService.currentUserSignal.set(null);
  }

  onSubmit() {
    this.apiService
      .loginUser(this.loginForm.getRawValue())
      .subscribe((res: any) => {
        console.log('form', res);
        localStorage.setItem('token', res.user.token);
        this.authService.currentUserSignal.set(res.user);
        this.router.navigateByUrl('/home');
      });
  }
}
