import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-user-invite',
  templateUrl: './user-invite.component.html',
  styleUrls: ['./user-invite.component.scss']
})
export class UserInviteComponent implements OnInit {

  user: any;
  users: any;

  constructor(
    public userSessionService: UserSessionService,
    public router: Router,
    public groupsService: GroupsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userSessionService.isLoggedIn().subscribe( u => {
      this.user = u
      this.userSessionService.getUsers().subscribe(list => this.users = list)
    });
  }

  notifyUser(userID) {

  }

}
