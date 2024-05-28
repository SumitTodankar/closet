import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const router = inject(Router);

  const token = localStorage.getItem('token') ?? '';
  request = request.clone({
    headers: request.headers.set('Content-Type', 'application/json'),
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('error occurred:', error);
      router.navigateByUrl('/login');
      return throwError(error);
    })
  );
};
