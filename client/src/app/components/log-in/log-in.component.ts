import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInInfo = {
    username: '',
    password: ''
  };

  constructor(public userSessionService: UserSessionService, public router: Router) {}

  ngOnInit() {}

  login() {
    this.userSessionService.login(this.logInInfo)
    .subscribe(() => this.router.navigate(['/']));
  }

  logout() {
    this.userSessionService.logout()
    .subscribe(() => this.router.navigate(['/']));
  }

}
