import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/helpers/api.service';
import { AuthService } from 'src/app/helpers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  apiService = inject(ApiService);
  authService = inject(AuthService);

  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    localStorage.setItem('token', '');
    this.authService.currentUserSignal.set(null);
  }

  onSubmit(): void {
    this.apiService
      .registerUser(this.registerForm.getRawValue())
      .subscribe((res: any) => {
        console.log('form', res);
        localStorage.setItem('token', res.user.token);
        this.authService.currentUserSignal.set(res.user);
        this.router.navigateByUrl('/home');
      });
  }
}
