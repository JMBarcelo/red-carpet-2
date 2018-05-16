import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { GroupsService } from '../../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {

  groupInfo = {
    name: '',
    users: this.userSessionService.user
  }

  constructor(
    public userSessionService: UserSessionService,
    public groupsService: GroupsService,
    public router: Router
  ) {
    
  }

  ngOnInit() {
    
  }

  newGroup() {
    this.groupsService.newGroup(this.groupInfo)
      .subscribe(() => this.router.navigate(["/"]));
  }
}
