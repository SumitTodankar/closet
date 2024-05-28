import { Injectable, signal } from '@angular/core';
import { User } from '../modules/auth/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSignal = signal<User | undefined | null>(null);
  constructor() {}
}
