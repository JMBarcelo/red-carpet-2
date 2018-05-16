import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSessionService } from '../../services/user-session.service';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent implements OnInit {

  group: any;

  constructor(
    public route: ActivatedRoute,
    public userSessionService: UserSessionService,
    public groupsService: GroupsService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.groupsService.get(params)
      .subscribe( group => this.group = group );
    })
  }

  edit() {
    this.groupsService.edit(this.groupsService.group)
    .subscribe(() => this.router.navigate(['/']));
  }

  delete() {
    this.groupsService.remove(this.groupsService.group)
    .subscribe(() => this.router.navigate(['/']));
  }

}
