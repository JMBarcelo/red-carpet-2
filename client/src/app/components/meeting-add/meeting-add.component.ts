import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/user-session.service';
import { Router } from '@angular/router';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'app-meeting-add',
  templateUrl: './meeting-add.component.html',
  styleUrls: ['./meeting-add.component.scss']
})
export class MeetingAddComponent implements OnInit {

  meetingInfo = {
    name: '',
    _user: this.userSessionService.user,
    date: null,
    place: ''
  }

  constructor(
    public userSessionService: UserSessionService,
    public meetingsService: MeetingsService,
    public router: Router
  ) {
    
  }

  ngOnInit() {
    
  }

  newMeeting() {
    this.meetingsService.newMeeting(this.meetingInfo)
      .subscribe(() => this.router.navigate(["/"]));
  }

}
