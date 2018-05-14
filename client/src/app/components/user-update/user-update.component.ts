import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  constructor(public route: ActivatedRoute, public userSessionService: UserSessionService, public router: Router) { }

  ngOnInit() { }

  update() {
    this.userSessionService.update(this.userSessionService.user)
    .subscribe(() => this.router.navigate(['/']));
  }

  erase() {
    this.userSessionService.erase(this.userSessionService.user._id)
    .subscribe(() => this.router.navigate(['/']));
  }

}
