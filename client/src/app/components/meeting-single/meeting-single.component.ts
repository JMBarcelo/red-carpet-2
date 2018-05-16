import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'app-meeting-single',
  templateUrl: './meeting-single.component.html',
  styleUrls: ['./meeting-single.component.scss']
})
export class MeetingSingleComponent implements OnInit {

  meeting: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private meetingsService: MeetingsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.meetingsService.get(params)
      .subscribe( meeting => this.meeting = meeting );
    })
  }

  deleteFavslist() {
    console.log("DELETED FAVSLIST");
    this.meetingsService.remove(this.meeting._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

}
