import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  getProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductByID(id: number) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }

  registerUser(user: any) {
    return this.http.post('https://api.realworld.io/api/users', { user: user });
  }

  loginUser(user: any) {
    return this.http.post('https://api.realworld.io/api/users/login', {
      user: user,
    });
  }

  getCurrentUser() {
    return this.http.get('https://api.realworld.io/api/user');
  }
}
