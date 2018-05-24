import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpInfo = {
    username: '',
    password: '',
    email: '',
    birthday: '',
    city: '',
    image: ''
  };

  constructor(public userSessionService: UserSessionService, public router: Router) {}

  ngOnInit() {}

  signup() {
    this.userSessionService.signup(this.signUpInfo)
    .subscribe(() => this.router.navigate(['/']));
  }

  logout() {
    this.userSessionService.logout()
    .subscribe(() => this.router.navigate(['/']));
  }

}
