import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSessionService } from '../../services/user-session.service';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'app-meeting-edit',
  templateUrl: './meeting-edit.component.html',
  styleUrls: ['./meeting-edit.component.scss']
})
export class MeetingEditComponent implements OnInit {

  meeting = {
    name : "",
    date : "",
    place : ""
  }

  constructor(
    public route: ActivatedRoute,
    public userSessionService: UserSessionService,
    public meetingsService: MeetingsService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.meetingsService.get(params)
      .subscribe( meeting => this.meeting = meeting );
    })
  }

  edit() {
    this.meetingsService.edit(this.meetingsService.meeting)
    .subscribe(() => this.router.navigate(['/']));
  }

  delete() {
    this.meetingsService.remove(this.meetingsService.meeting)
    .subscribe(() => this.router.navigate(['/']));
  }

}
