import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../services/groups.service';
import { AdviceGroupService } from '../../services/advice-group.service';

@Component({
  selector: 'app-user-invite',
  templateUrl: './user-invite.component.html',
  styleUrls: ['./user-invite.component.scss']
})
export class UserInviteComponent implements OnInit {

  user: any;
  users: any;
  group: any;

  adviceGroupInfo = {
    _sender: this.userSessionService.user._id,
    _receiver: '',
    _group: this.groupsService.group._id,
    message: ''
  };

  constructor(
    public userSessionService: UserSessionService,
    public groupsService: GroupsService,
    public router: Router,
    public adviceGroupService: AdviceGroupService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.groupsService.get(params)
      .subscribe( group => this.group = group );
    })
    this.userSessionService.isLoggedIn().subscribe( u => {
      this.user = u
      this.userSessionService.getUsers().subscribe(list => this.users = list)
    });
  }

  sendInvitation(receiverID) {
    this.adviceGroupInfo._receiver = receiverID; 
    this.adviceGroupService.newAdviceGroup(this.adviceGroupInfo)
    .subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

}
