import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  username = '';
  password = '';
  return = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.return = params.return || '/orders';
        if (!this.userService.isGuest()) {
          this.go();
        }
      });
  }

  login() {
    console.log(this.username);
    console.log(this.password);
    if (this.username && this.password) {
      this.userService.login(this.username);
      this.go();
    }
  }

  private go() {
    this.router.navigateByUrl(this.return);
  }

}
