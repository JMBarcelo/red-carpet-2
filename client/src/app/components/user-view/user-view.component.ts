import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  constructor(public userSessionService: UserSessionService, public router: Router) { }

  ngOnInit() { }

  logout() {
    this.userSessionService.logout()
    .subscribe(() => this.router.navigate(['/']));
  }

}
