import { Component, OnInit, Input } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { GroupsService } from '../../services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'app-garment-meeting',
  templateUrl: './garment-meeting.component.html',
  styleUrls: ['./garment-meeting.component.scss']
})
export class GarmentMeetingComponent implements OnInit {

  user: any;
  groups: any;
  clothes: any;
  meeting: any;
  date: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public userSessionService: UserSessionService,
    public groupsService: GroupsService,
    public meetingsService: MeetingsService
  ) { }

  ngOnInit() {
    this.userSessionService.isLoggedIn().subscribe( u => {
      this.user = u
      this.route.params.subscribe( params => {
        this.meetingsService.get(params)
        .subscribe( meeting => {
          this.meeting = meeting;
          this.date = this.meeting.date;
          this.groupsService.getList()
            .subscribe(groups => {
              this.groups = groups
            })
        });
      })     
    });
  }
}
