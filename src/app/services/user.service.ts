import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

let username = localStorage.getItem('username') || '';
let guest = (!username);

@Injectable()
export class UserService {

  constructor(private router: Router) {}

  isGuest() {
    return guest;
  }

  getUser() {
    return username;
  }

  login(newUsername) {
    // TODO: handle the credentials verification.
    username = newUsername;
    guest = false;
    localStorage.setItem('username', username);
  }

  logout() {
    username = '';
    guest = true;
    localStorage.setItem('username', '');
    this.router.navigate([{outlets: {chat: null}}]);
  }
}
